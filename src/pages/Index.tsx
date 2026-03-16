import { motion } from "framer-motion";
import { Star } from "lucide-react";
import logo from "@/assets/logo.png";
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
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden" style={{ backgroundColor: 'hsl(0 0% 10%)' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(0_0%_14%)_0%,_hsl(0_0%_6%)_70%)]" />
        {/* Manhattan Skyline */}
        <div className="absolute bottom-0 left-0 right-0 z-0 opacity-15">
          <svg viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,320 L0,280 L30,280 L30,240 L45,240 L45,260 L60,260 L60,220 L75,220 L75,200 L90,200 L90,180 L100,180 L100,140 L110,140 L110,180 L120,180 L120,160 L135,160 L135,200 L150,200 L150,170 L160,170 L160,130 L170,130 L170,110 L180,110 L180,130 L190,130 L190,160 L200,160 L200,190 L215,190 L215,150 L225,150 L225,120 L235,120 L235,80 L240,80 L240,60 L245,60 L245,40 L250,40 L250,60 L255,60 L255,80 L260,80 L260,120 L270,120 L270,150 L280,150 L280,180 L295,180 L295,140 L305,140 L305,100 L315,100 L315,80 L320,80 L320,60 L325,50 L330,60 L330,80 L335,80 L335,100 L345,100 L345,140 L355,140 L355,170 L370,170 L370,200 L385,200 L385,160 L395,160 L395,130 L405,130 L405,150 L415,150 L415,180 L430,180 L430,210 L445,210 L445,190 L455,190 L455,160 L465,160 L465,140 L470,140 L470,100 L475,100 L475,70 L480,70 L480,50 L485,50 L485,30 L488,20 L491,30 L495,30 L495,50 L500,50 L500,70 L505,70 L505,100 L510,100 L510,140 L520,140 L520,170 L535,170 L535,200 L550,200 L550,220 L565,220 L565,190 L575,190 L575,160 L585,160 L585,130 L590,130 L590,100 L595,100 L595,80 L600,80 L600,100 L605,100 L605,130 L615,130 L615,160 L625,160 L625,190 L640,190 L640,210 L655,210 L655,180 L665,180 L665,150 L675,150 L675,120 L680,120 L680,90 L685,90 L685,60 L690,60 L690,40 L693,30 L696,40 L700,40 L700,60 L705,60 L705,90 L710,90 L710,120 L720,120 L720,150 L730,150 L730,180 L745,180 L745,200 L760,200 L760,230 L775,230 L775,200 L785,200 L785,170 L795,170 L795,150 L805,150 L805,180 L815,180 L815,210 L830,210 L830,230 L845,230 L845,200 L855,200 L855,170 L865,170 L865,140 L870,140 L870,110 L875,110 L875,80 L880,80 L880,110 L885,110 L885,140 L895,140 L895,170 L905,170 L905,200 L920,200 L920,220 L935,220 L935,190 L945,190 L945,160 L955,160 L955,140 L960,140 L960,120 L965,120 L965,100 L970,100 L970,120 L975,120 L975,140 L985,140 L985,170 L995,170 L995,200 L1010,200 L1010,220 L1025,220 L1025,240 L1040,240 L1040,210 L1050,210 L1050,180 L1060,180 L1060,160 L1070,160 L1070,190 L1080,190 L1080,220 L1095,220 L1095,190 L1105,190 L1105,160 L1115,160 L1115,130 L1120,130 L1120,100 L1125,100 L1125,70 L1128,60 L1131,70 L1135,70 L1135,100 L1140,100 L1140,130 L1150,130 L1150,160 L1160,160 L1160,190 L1175,190 L1175,210 L1190,210 L1190,240 L1205,240 L1205,220 L1215,220 L1215,200 L1225,200 L1225,230 L1240,230 L1240,250 L1255,250 L1255,230 L1265,230 L1265,210 L1275,210 L1275,240 L1290,240 L1290,260 L1305,260 L1305,240 L1315,240 L1315,220 L1325,220 L1325,250 L1340,250 L1340,260 L1355,260 L1355,240 L1365,240 L1365,260 L1380,260 L1380,270 L1395,270 L1395,260 L1410,260 L1410,280 L1425,280 L1425,270 L1440,270 L1440,320 Z"
              fill="none"
              stroke="hsl(0 0% 100%)"
              strokeWidth="1.5"
            />
          </svg>
        </div>
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
      <section className="py-24 px-6 bg-secondary">
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
