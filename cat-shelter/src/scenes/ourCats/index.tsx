import { SelectedPage, CatType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Cat from "./Cat";

const cats: Array<CatType> = [
  {
    name: "Whiskers",
    description:
      "Whiskers is a playful tabby with vibrant green eyes and an insatiable curiosity. Known for her clever antics, she often leads the pack in mild mischief around the shelter.",
    image: image1,
  },
  {
    name: "Shadow",
    description:
      "As his name suggests, Shadow is a sleek, all-black cat who loves to lurk in unnoticed places. Despite his elusive nature, he's extremely affectionate once he gets comfortable with someone.",
    image: image2,
  },
  {
    name: "Ginger",
    description:
      "Ginger is a cheerful ginger cat with fluffy fur and a cheerful demeanor. She enjoys basking in the sun and is always the first to greet visitors with her melodious purrs.",
    image: image3,
  },
  {
    name: "Bella",
    description:
      "Bella is a dignified Siamese with striking blue eyes and a regal posture. She enjoys solitude and pampering, often found lounging on the coziest cushion in the house.",
    image: image4,
  },
  {
    name: "Mittens",
    image: image5,
  },
  {
    name: "Coco",
    description:
      "Coco is a brown Burmese cat known for her deep, chocolaty coat. She's a wise old soul, offering calm companionship and gentle head bumps to anyone feeling down.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurCats = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourcats" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurCats)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CATS</HText>
            <p className="py-5">
              At our sanctuary, each cat boasts a unique charm and personality. 
              From playful kittens to wise old cats, our diverse feline family 
              is united by one thing: the search for a loving forever home. 
              These cats come from various backgrounds, each with a story to 
              tell, whether they are rescues from uncertain fates or beloved 
              pets who have lost their way.
            </p>
          </div>
        </motion.div>
        {/* The horizontal scrollbar */}
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          {/* cat pictures in a unordered list */}
          <ul className="w-[2800px] whitespace-nowrap">
            {cats.map((item: CatType, index) => (
              <Cat
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurCats;
