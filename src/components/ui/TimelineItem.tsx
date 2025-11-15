import { motion } from 'framer-motion';
import React from 'react';

interface TimelineItemProps {
  time: string;
  title: string;
  items: string[];
  index: number;
  isLast?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ time, title, items, index, isLast = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative pl-8 ${isLast ? 'pb-0' : 'pb-8 md:pb-12'}`}
    >
      <div className="absolute left-0 top-2 w-3 h-3 bg-accent rounded-full border-4 border-white shadow-lg z-10"></div>
      {!isLast && (
        <div className="absolute left-[5px] top-3 bottom-0 w-0.5 bg-gradient-to-b from-accent to-transparent"></div>
      )}
      
      <div className="ml-4">
        <div className="text-sm font-semibold text-accent mb-1">{time}</div>
        <h3 className="text-xl md:text-2xl font-bold text-charcoal-900 mb-4">{title}</h3>
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <li key={idx} className="text-charcoal-700 flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
