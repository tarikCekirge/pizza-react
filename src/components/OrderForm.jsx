import { Form, redirect, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import axios from 'axios';
import { sizes, doughOptions, ingredientsList, BASE_PRICE, SIZE_PRICES, INGREDIENT_PRICE } from '../lib/constants';
import SizeInput from "../UI/SizeInput";
import DoughSelect from "../UI/DoughSelect";
import IngredientButton from "../UI/IngredientButton";
import Divider from "./Divider";
import SubmitButton from "../UI/SubmitButton";


const OrderForm = () => {
    const navigate = useNavigate();
    const {
        register,
        setValue,
        handleSubmit,
        watch,
        formState: { errors, isValid, isSubmitting }
    } = useForm({ mode: "onTouched", defaultValues: { ingredients: [], size: "S" } })

    const [quantity, setQuantity] = useState(1)
    const selectedSize = watch("size")
    const selectedIngredients = watch("ingredients") || []

    const sizeExtra = SIZE_PRICES[selectedSize] || 0
    const extrasTotal = selectedIngredients.length * INGREDIENT_PRICE
    const total = (BASE_PRICE + sizeExtra + extrasTotal) * quantity

    const toggleIngredient = (ingredient) => {
        const current = watch("ingredients") || []
        if (current.includes(ingredient)) {
            setValue("ingredients", current.filter(i => i !== ingredient), { shouldValidate: true })
        } else if (current.length < 10) {
            setValue("ingredients", [...current, ingredient], { shouldValidate: true })
        }
    }

    useEffect(() => {
        setValue("extrasTotal", extrasTotal)
        setValue("total", total)
    }, [extrasTotal, total, setValue])

    const onSubmit = async (data) => {
        const ingredients = Array.isArray(data.ingredients) ? data.ingredients : [];
        const sizeExtra = SIZE_PRICES[data.size] || 0;
        const extrasTotal = ingredients.length * INGREDIENT_PRICE;
        const quantity = data.quantity || 1;
        const total = (BASE_PRICE + sizeExtra + extrasTotal) * quantity;

        const order = {
            ...data,
            ingredients,
            sizeExtra,
            extrasTotal,
            total,
            createdAt: new Date().toISOString(),
        };
        try {
            const response = await axios.post('https://reqres.in/api/pizza', order);
            if (response.status === 200 || response.status === 201) {
                navigate('/success', { state: { order } });
            } else {
                console.error('Response Error:', response);
            }
        } catch (error) {
            console.error('Submitting Error:', error);
        }
    };



    return (
        <div className="max-w-2xl mx-auto">

            <Form onSubmit={handleSubmit(onSubmit)} className="space-y-6" >
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="font-bold font-barlow">Boyut Seç <span className="text-red-500">*</span></label>
                        <div className="flex gap-3 mt-2">
                            {sizes.map(size => (
                                <SizeInput
                                    key={size}
                                    size={size}
                                    selectedSize={selectedSize}
                                    register={register}
                                />
                            ))}
                        </div>
                        {errors.size && <p className="text-red-500 text-sm">Boyut seçimi zorunludur.</p>}
                    </div>

                    <div>
                        <label className="font-bold">Hamur Seç <span className="text-red-500">*</span></label>
                        <DoughSelect
                            register={register}
                            doughOptions={doughOptions}
                        />
                        {errors.dough && <p className="text-red-500 text-sm">Hamur tipi zorunludur.</p>}
                    </div>
                </div>

                <div>
                    <label className="font-bold">Ek Malzemeler</label>
                    <p className="text-sm text-gray-500">En az 4, en fazla 10 malzeme seçebilirsiniz. (5₺)</p>

                    <input
                        type="hidden"
                        {...register("ingredients", {
                            validate: value => {
                                const count = value?.length || 0
                                if (count < 4) return "En az 4 malzeme seçmelisiniz."
                                if (count > 10) return "En fazla 10 malzeme seçebilirsiniz."
                                return true
                            }
                        })}
                    />

                    <div className="grid grid-cols-3 gap-2 mt-2">
                        {ingredientsList.map(ingredient => (
                            <IngredientButton
                                key={ingredient}
                                ingredient={ingredient}
                                toggleIngredient={toggleIngredient}
                                selectedIngredients={selectedIngredients}
                            />
                        ))}
                    </div>

                    {errors.ingredients && (
                        <p className="text-red-500 text-sm mt-2">{errors.ingredients.message}</p>
                    )}
                </div>

                <div>
                    <label className="font-bold">Adınız</label>
                    <input type="text" {...register("name")} className="w-full border-none p-2 bg-wood-50 rounded-md mt-2 ring-0 outline-0" />

                </div>

                <div>
                    <label className="font-bold">Sipariş Notu</label>
                    <textarea {...register("note")} className="w-full border-none p-2 bg-wood-50 rounded-md mt-2" placeholder="Eklemek istediğiniz bir not var mı?" />
                </div>
                <Divider mode={"dark"} />

                <div className=" grid md:grid-cols-[auto_1fr] py-4 gap-4">
                    <div className="">
                        <div className="rounded-md flex overflow-hidden">
                            <button type="button" onClick={() => setQuantity(q => Math.max(1, q - 1))} className="cursor-pointer bg-yellow-400 border-yellow-400 rounded-l-md size-14 font-barlow text-2xl font-500 ">-</button>
                            <span className="size-14 border-t border-t-gray-200  border-b border-b-gray-200 flex items-center justify-center font-barlow text-lg font-600 text-gray-950">{quantity}</span>
                            <input type="hidden" value={quantity} {...register("quantity")} />
                            <button type="button" onClick={() => setQuantity(q => q + 1)} className=" cursor-pointer bg-yellow-400 border-yellow-400 rounded-r-md size-14 font-barlow text-2xl font-500">+</button>
                        </div>


                    </div>
                    <div className="p-12 border border-gray-100 rounded w-full bg-wood-50">
                        <h4 className="font-barlow mb-3 text-xl font-600 text-gray-950">Sipariş Toplamı</h4>
                        <p className="flex justify-between font-barlow font-600 text-gray-900 mb-3">Seçimler Toplamı: <span>{(sizeExtra + extrasTotal).toFixed(2)}₺</span></p>
                        <p className="flex justify-between font-barlow font-600 text-red-600">Genel Toplam: <span>{total.toFixed(2)}₺</span></p>
                    </div>

                    <SubmitButton isValid={isValid} isSubmitting={isSubmitting} />
                </div>
                <input type="hidden" {...register("extrasTotal")} value={extrasTotal} />
                <input type="hidden" {...register("total")} value={total} />
                <input type="hidden" {...register("orderName")} value={"Position Absolute Acılı"} />


            </Form>
        </div >
    )
}

export default OrderForm

