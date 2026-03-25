import React, { useState } from 'react';
import { JOURNEY } from "../../data/journey";
import * as Icons from "lucide-react";
import { Wrench } from "lucide-react";
import FadeIn from "../animations/FadeIn";

const filters = ["Education", "Certifications", "Awards"];

const Journey = () => {
  const [activeFilter, setActiveFilter] = useState("Education");

  const filteredData =
    activeFilter === "All"
      ? JOURNEY
      : JOURNEY.filter(item =>
          item.category.toLowerCase() === activeFilter.toLowerCase()
        );

  // 🔥 Split by category
  const education = filteredData.filter(i => i.category === "Education");
  const certifications = filteredData.filter(i => i.category === "Certifications");
  const awards = filteredData.filter(i => i.category === "Awards");

  // 🔥 Helper Components
  const LargeCard = (item, index) => {
    const IconComponent = Icons[item.icon] || Icons.Code2;

    return (
      <FadeIn key={item.id} delay={index * 100}>
        <div className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 h-full min-h-[280px] flex flex-col">

          <div className="flex items-center justify-between mb-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <IconComponent className="w-8 h-8 text-primary" />
            </div>

            {item.logo && (
              <img src={item.logo} className="w-12 h-12 object-contain opacity-80" />
            )}
          </div>

          <div className="flex-1">
            <span className="text-xs text-primary uppercase">{item.category}</span>

            <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-primary transition">
              {item.title}
            </h3>

            <p className="text-white/60">{item.description}</p>
          </div>

          <p className="text-sm text-primary mt-4">{item.extra}</p>

          <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-3xl transition pointer-events-none" />
        </div>
      </FadeIn>
    );
  };

  const SmallCard = (item, index) => {
    const IconComponent = Icons[item.icon] || Icons.Code2;

    return (
      <FadeIn key={item.id} delay={index * 100}>
        <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">

          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <IconComponent className="w-6 h-6 text-primary" />
            </div>

            {item.logo && (
              <img src={item.logo} className="w-10 h-10 object-contain opacity-80" />
            )}
          </div>

          <span className="text-xs text-primary uppercase">{item.category}</span>

          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A8FF8D] transition">
            {item.title}
          </h3>

          <p className="text-sm text-white/60">{item.description}</p>

          <p className="text-xs text-primary mt-2">{item.extra}</p>

          <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition pointer-events-none" />
        </div>
      </FadeIn>
    );
  };

  return (
    <section id="journey" className="relative py-20 bg-black overflow-hidden">

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">

        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Wrench className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary uppercase">My Journey</span>
            </div>

            <h2 className="text-4xl text-white mb-4">
              Academic & Non-academic Achievements
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Here's a little glimpse of my journey so far
            </p>
          </div>
        </FadeIn>

        {/* FILTERS (UNCHANGED) */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm rounded-full border transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-primary text-black border-primary"
                  : "text-white/60 border-white/20 hover:border-primary hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* 🔥 EDUCATION */}
        {education.length > 0 && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-6">
              {education.slice(0, 1).map(LargeCard)}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {education.slice(1).map(SmallCard)}
            </div>
          </>
        )}

        {/* 🔥 CERTIFICATIONS */}
        {certifications.length > 0 && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-6">
              {certifications.slice(0, 1).map(LargeCard)}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {certifications.slice(1).map(SmallCard)}
            </div>
          </>
        )}

        {/* 🔥 AWARDS */}
        {awards.length > 0 && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-6">
              {awards.slice(0, 1).map(LargeCard)}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awards.slice(1).map(SmallCard)}
            </div>
          </>
        )}

      </div>
    </section>
  );
};

export default Journey;