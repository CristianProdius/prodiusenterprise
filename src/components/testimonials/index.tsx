import Image from "next/image";
import { twMerge } from "tailwind-merge";

export const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: "/avatar-1.png",
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: "/avatar-2.png",
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: "/avatar-3.png",
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: "/avatar-4.png",
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: "/avatar-5.png",
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: "/avatar-6.png",
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: "/avatar-7.png",
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: "/avatar-8.png",
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: "/avatar-9.png",
    name: "Casey Harper",
    username: "@casey09",
  },
];

const TestimonialsColumn = (props: {
  clasName?: string;
  testimonials: typeof testimonials;
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]",
        props.clasName
      )}
    >
      {props.testimonials.map(({ text, imageSrc, name, username }, index) => (
        <div className="card" key={index}>
          <div>{text}</div>
          <div className="flex items-center gap-2 mt-5">
            <Image
              src={imageSrc}
              width={40}
              height={40}
              alt={name}
              className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-col">
              <div className="font-medium tracking-tight leading-5">{name}</div>
              <div className="leading-5 tracking-tight">{username}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {
  return (
    <section className="bg-white ">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="flex justify-center">
          <div className="tag">Testimonials</div>
        </div>
        <div className="max-w-[540px] mx-auto">
          <h2 className="section-title mt-5">What our users say </h2>
          <p className="section-description mt-5">
            From intuitive design to powerful features, out app has become an
            essential tool for users around the world.
          </p>
        </div>
        <div className="flex justify-center gap-6">
          <TestimonialsColumn testimonials={firstColumn} />
          <TestimonialsColumn
            testimonials={secondColumn}
            clasName="hidden md:flex"
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            clasName="hidden lg:flex"
          />
        </div>
      </div>
    </section>
  );
};
