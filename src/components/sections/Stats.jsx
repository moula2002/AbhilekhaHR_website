import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const CountUp = ({ value, suffix = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());
  const [displayValue, setDisplayValue] = useState("0");

  const numericValue = parseInt(value.replace(/,/g, ''), 10);

  useEffect(() => {
    const controls = animate(count, numericValue, { 
      duration: 2.5,
      ease: "easeOut"
    });
    return rounded.onChange((v) => setDisplayValue(v));
  }, [numericValue]);

  return <span>{displayValue}{suffix}</span>;
};

const statsData = [
  { 
    value: "200000", 
    suffix: "+",
    label: "Employees Placement", 
    desc: "Successfully placing professionals across global industries." 
  },
  { 
    value: "200", 
    suffix: "+",
    label: "Global Clients", 
    desc: "Partnering with top-tier Fortune 500 and leading firms." 
  },
  { 
    value: "20", 
    suffix: "+",
    label: "Years of Legacy", 
    desc: "Two decades of excellence in manpower and HR solutions." 
  },
  { 
    value: "100", 
    suffix: "+",
    label: "Expert Associates", 
    desc: "Dedicated consultants providing tailored talent strategy." 
  }
];

const Stats = () => {
  return (
    <section className="bg-[#FFB82B] py-20 px-6 font-inter overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[28px] md:text-[42px] font-bold text-[#020C1F] text-center mb-16"
        >
          Why We Are a Top Recruitment Agency in India?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {statsData.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center space-y-4 group"
            >
              <div className="text-[36px] md:text-[52px] font-black text-blue-700 tracking-tighter transition-transform group-hover:scale-110 duration-300">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[16px] md:text-[18px] font-bold text-[#020C1F] leading-tight transition-colors group-hover:text-blue-800">
                {stat.label}
              </div>
              <div className="text-[12px] md:text-[14px] text-[#020C1F]/70 leading-relaxed font-medium max-w-[200px]">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
