import { motion } from "framer-motion";
import { services } from "@/data/services";

const VAGARO_URL = "https://www.vagaro.com/empirebarbers";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5 },
  }),
};

const Services = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-3xl md:text-5xl text-center mb-4 tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h1>
        <div className="w-16 h-px bg-foreground mx-auto mb-16" />

        <div className="flex flex-col gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              className="border border-border p-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <div className="flex-1">
                <div className="flex items-baseline gap-4 mb-2 flex-wrap">
                  <h2 className="text-lg font-semibold tracking-wide">{service.name}</h2>
                  {service.price && (
                    <span className="text-foreground font-bold text-lg">{service.price}</span>
                  )}
                </div>
                {service.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                )}
                {service.note && (
                  <p className="text-sm text-muted-foreground mt-1 italic">{service.note}</p>
                )}
              </div>
              <a
                href={VAGARO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-foreground px-6 py-2 text-xs tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-all duration-300 self-start whitespace-nowrap"
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
