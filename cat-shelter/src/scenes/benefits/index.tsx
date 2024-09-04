import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HeartIcon,
  UserGroupIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from './Benefit';

const benefits: Array<BenefitType> = [
  {
    icon: <HeartIcon className="h-6 w-6" />,
    title: "Emotional Support",
    description:
      "Cats offer unparalleled emotional support. Their presence can significantly decrease stress and anxiety levels, providing a sense of calm and comfort. ",
  },
  {
    icon: <HandThumbUpIcon className="h-6 w-6" />,
    title: "Health Benefits",
    description:
      "Owning a cat is linked to numerous health benefits. Cat owners often experience lower blood pressure and reduced risk of heart disease compared to non-pet owners.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Social Bonding",
    description:
      "Cats can play a crucial role in enhancing social interactions and reducing feelings of loneliness. For families, a cat can become a central figure around which social activities and bonding occur.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>Save a Life, Make a Friend.</HText>
          <p className="my-5 text-sm">
            Give a loving home to a pet in need and transform lives forever. 
            By choosing adoption, you help break the cycle of pet overpopulation and support 
            animal welfare. Let's save lives together—embrace adoption and make a lasting impact.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          // If it's a mobile screen, arrange elements vertically. (mt-5 gap-8)
          // Else, it will follow flexbox rulls. (all settings applied)
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          // define the properties of 'initial' and 'whileInview' 
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    JOIN MEOWSAVE FAMILY{" "}
                    <span className="text-primary-500">NOW</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Become a part of our growing community at MeowSave by subscribing today. 
                By providing your contact information, you'll be the first to hear about 
                new cats that are ready for adoption and can become a loving part of your 
                family. We believe every cat deserves a chance to find a forever home, and 
                by subscribing, you ensure you never miss out on the opportunity to meet 
                your new best friend.
              </p>
              <p className="mb-5">
                Subscribers receive regular updates, including detailed profiles and stories 
                about our cats, exclusive event invitations, and vital tips on cat care. Help 
                us help them—subscribe now to get involved and stay informed. Together, let's 
                create more happy endings for cats in need.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
