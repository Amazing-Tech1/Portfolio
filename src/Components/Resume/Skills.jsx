import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { skills } from '../../assets/assets';

function Skills() {
    const [counts, setCounts] = useState({});

    const countUp = (skillName, start, end) => {
        let current = start;
        const interval = setInterval(() => {
            if (current < end) {
                current += 1;
                setCounts(prevCounts => ({
                    ...prevCounts,
                    [skillName]: current,
                }));
            } else {
                clearInterval(interval);
            }
        }, 50);
    };
    return (
        <div className="py-8 w-full">
            <div className="">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 gap-y-7 w-full">
                    {skills.map(({ name, img, percentage }) => {
                        return (
                            <div
                                key={name}
                                className="flex flex-col items-center justify-center bg-white rounded-3xl p-5 shadow-lg z-1"
                            >
                                <img
                                    src={img}
                                    alt={name}
                                    className="w-16 h-16 rounded-full mb-3"
                                />
                                <h3 className="text-lg font-bold mb-2">{name}</h3>
                                <motion.div
                                    className="text-sm font-bold"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 2 }}
                                    onViewportEnter={() => {

                                        if (!counts[name]) {
                                            countUp(name, 0, percentage);
                                        }
                                    }}
                                >
                                    {counts[name] || 0}%
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills
