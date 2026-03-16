import { motion } from "framer-motion";
import { Star } from "lucide-react";
import logo from "@/assets/logo.png";
import manhattanVideo from "@/assets/manhattan-aerial.mp4";
import { teamMembers } from "@/data/team";

const VAGARO_URL = "https://www.vagaro.com/empirebarbers";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(100%) brightness(0.6)' }}
          >
            <source src={manhattanVideo} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-background/30 z-[1]" />
        <motion.div
          className="relative z-10 flex flex-col items-center gap-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={logo} alt="Empire Barbers" className="h-40 md:h-56 w-auto invert" />
          <div className="w-16 h-px bg-foreground" />
          <p className="text-muted-foreground text-sm md:text-base tracking-[0.3em] uppercase max-w-lg">
            Parkland / Coral Springs
          </p>
          <a
            href={VAGARO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 border border-foreground px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Book Now
          </a>
        </motion.div>
      </section>

      {/* Description */}
      <section className="py-24 px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <div className="w-16 h-px bg-foreground mx-auto mb-8" />
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-light">
            We are an upscale barbershop in the Parkland/Coral Springs area. Our barbershop specializes in all haircuts and hot shaves for all ages. It's not just a haircut, it's an experience.
          </p>
          <div className="w-16 h-px bg-foreground mx-auto mt-8" />
        </motion.div>
      </section>

      {/* Who We Are */}
      <section className="relative py-24 px-6 bg-secondary overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-5xl text-center mb-16 tracking-wider"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            Who We Are
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                className="bg-background border border-border p-6 flex flex-col"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <div className="flex items-center gap-1 mb-1">
                  <h3 className="text-lg font-semibold tracking-wide">{member.name}</h3>
                  {member.name === "Elvis H" && (
                    <span className="text-xs text-muted-foreground ml-2 tracking-wider uppercase">Owner</span>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className={`h-3.5 w-3.5 ${
                          idx < Math.floor(member.rating)
                            ? "fill-foreground text-foreground"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {member.rating} ({member.reviews} {member.reviews === 1 ? "Review" : "Reviews"})
                  </span>
                </div>
                {member.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
