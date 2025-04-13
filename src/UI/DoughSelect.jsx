import React from 'react';

const DoughSelect = ({ register, doughOptions }) => {
    return (
        <select {...register("dough", { required: true })} className=" h-14 pr-8 ring-0 outline-0 bg-wood-50 p-2 mt-2 w-full rounded border-r-[1rem] border-transparent">
            <option value="" disabled>-- Hamur Kalınlığı Seçiniz --</option>
            {doughOptions.map(dough => (
                <option key={dough} value={dough}>
                    {dough}
                </option>
            ))}
        </select>
    );
};

export default DoughSelect;
