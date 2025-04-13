import React from 'react';

const SizeInput = ({ size, selectedSize, register }) => {
    return (
        <label className="cursor-pointer">
            <input
                type="radio"
                value={size}
                {...register("size", { required: true })}
                className="hidden"
            />
            <div className={`size-14 rounded-full flex items-center justify-center font-barlow font-600  ${selectedSize === size ? "bg-yellow-500 text-gray-1000" : "bg-wood-50 text-gray-500"}`}>
                {size}
            </div>
        </label>
    );
};

export default SizeInput;
