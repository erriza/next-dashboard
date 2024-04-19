'use client';
import { FiArrowUpRight, FiArrowUp } from 'react-icons/fi';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export const MotionDiv = motion.div;

interface TextParallaxContentProps {
  imgUrl: string;
  subheading?: string; // Optional subheading
  heading: string;
  children?: React.ReactNode; // Optional children
}

interface StickyImageProps {
  imgUrl: string;
}

interface OverlayCopyProps {
  subheading?: string; // Optional subheading
  heading: string;
}

export default function Page() {
  return (
    <>
      <h1 className='text-center p-4'>Parallex Landing Example</h1>
      <TextParallaxContentExample/>
    </>
  );
}

const TextParallaxContentExample = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        subheading="Collaborate"
        heading="Built for all of us."
      >
        <ExampleContent/>
      </TextParallaxContent>
      <TextParallaxContent 
        imgUrl="https://images.unsplash.com/photo-1676545736963-98c64e6ff281?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        subheading="Quality" 
        heading="Never compromise"
      >
        <ExampleContent/>

      </TextParallaxContent> 
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1712569490441-0c7cc00e6768?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Modern"
        heading="Dress for the best"
      >
        <ExampleContent/>

      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent: React.FC<TextParallaxContentProps> 
  = ({ imgUrl, subheading, heading, children}) => {
  // TextParallaxContent.propTypes = {
  //     imgUrl: PropTypes.string.isRequired,
  //     subheading: PropTypes.string,
  //     heading: PropTypes.string,
  //     children: PropTypes.node, 
  //   };

  return (
  <div
      style={{
          paddingLeft: IMG_PADDING,
          paddingRight: IMG_PADDING
      }}
  >
      <div className="relative h-[150vh]">
          <StickyImage imgUrl={imgUrl} />
          <OverlayCopy
              subheading={subheading}
              heading={heading}
          />
      </div>
      {children}
  </div>
  )
}

const StickyImage: React.FC<StickyImageProps> = ({imgUrl}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["end end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0,1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0,1], [1, 0]);


  // StickyImage.propTypes = {
  //     imgUrl: PropTypes.string.isRequired,
  //   };

  return (
      <MotionDiv
          style={{
              backgroundImage: `url(${imgUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: `calc(100vh - ${IMG_PADDING * 2}px)`,
              top: IMG_PADDING,
              scale
          }}
          ref={targetRef}
          className="sticky z-0 overflow-hidden rounded-3xl"
      >
          <MotionDiv
          style={{
              opacity,
          }} 
              className='absolute inset-0 bg-neutral-950/70'
          />
      </MotionDiv>
  )
}

//OverlayComponent
const OverlayCopy: React.FC<OverlayCopyProps> = ({ heading, subheading}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0,1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0,1,0]);

  
  // OverlayCopy.propTypes = {
  //     subheading: PropTypes.string,
  //     heading: PropTypes.string,
  // };
  return <MotionDiv
      ref={targetRef}
      style={{
          y,
          opacity
      }}
      className='absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white'
  >
      <p className='mb-2 text-center text-xl md:mb-4 md:text-3xl'>{subheading}</p>
      <p className='text-center text-4xl font-bold md:text-7xl'>{heading}</p>

  </MotionDiv>
}

//Example component
const ExampleContent = () => (
  <div className='mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12'>
      <h2 className='col-span-1 text-3xl font-bold md:col-span-4'>
          Additional Content explainig the above card here
      </h2>
      <div className='col-span-1 md:col-span-8'>
          <p className='mb-4 text-xl text-neutral-600 md:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ea nisi numquam velit exercitationem. Sed dicta id ipsam, quo animi quis modi quia alias aliquid doloremque. Quasi dolor voluptates ad?
          </p>
          <p className='mb-8 text-xl text-neutral-600 md:text-2xl'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae eos earum fugiat repudiandae soluta nobis, sit, quam adipisci ad, saepe cum corrupti? Tempore sint nemo ullam eligendi exercitationem? Quos, voluptate!
          </p>
          <button className='w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit'>
              Learn more <FiArrowUpRight className='inline'/> 
          </button>
      </div>
  </div>
)