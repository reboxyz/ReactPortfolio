import React from 'react';
import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';

const containerParentVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectElementVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
   bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  const projectTitle = title.split(' ').join('-').toLowerCase();
  return (
    <motion.div variants={projectElementVariant} className='relative'>
      <div className={overlayStyles}>
        <p className='text-2xl font-playfair'>{title}</p>
        <p className='mt-7'>{subtitle}</p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id='projects' className='pt-48 pb-48'>
      {/* HEADINGS */}
      <motion.div
        className='md:w-2/4 mx-auto text-center'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className='font-playfair font-semibold text-4xl'>
            MY <span className='text-red'>PRO</span>JECTS
          </p>
          <div className='flex justify-center mt-5'>
            <LineGradient width='w-1/3' />
          </div>
        </div>

        <p className='mt-10 mb-10'>
          Nulla pellentesque libero ac semper hendrerit. Donec iaculis sed
          sapien et feugiat. Duis venenatis scelerisque velit, vel vestibulum
          sapien blandit et. Proin eros erat, pharetra quis rutrum sed, aliquet
          id mauris.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className='flex justify-center'>
        {/* Note! This is the parent motion div which will have children motion div */}
        <motion.div
          className='sm:grid sm:grid-cols-3'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          variants={containerParentVariant}
        >
          {/* ROW 1 : This div is static which is vertically and horizontally aligned in the center. This has maximum width and height of 400px */}
          <div
            className='flext justify-center text-center items-center p-10 bg-red
          max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold
        '
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title='Project 1'
            subtitle='Suspendisse ut lacus vitae diam rhoncus egestas vitae nec lectus. Phasellus egestas dignissim eros ut condimentum. Donec dignissim odio commodo erat laoreet, eu lobortis ligula mollis.'
          />
          <Project
            title='Project 2'
            subtitle='Fusce sit amet scelerisque urna, sit amet feugiat elit. Ut erat enim, tempor ac tellus sit amet, aliquam vulputate quam.'
          />

          {/* ROW 2 */}
          <Project
            title='Project 3'
            subtitle='Vestibulum erat nisl, efficitur et mattis ut, rhoncus vel nisi. Quisque pulvinar, enim non tempor sagittis, est lacus imperdiet massa, ac fringilla ipsum libero nec nisi.'
          />
          <Project
            title='Project 4'
            subtitle='Sed consequat sapien libero, a mollis erat sodales a. Cras auctor maximus rutrum. Cras consectetur odio non justo imperdiet dignissim. Maecenas blandit nisi eget ex tempus maximus.'
          />
          <Project
            title='Project 5'
            subtitle='Vivamus lobortis odio id ex iaculis mattis. Suspendisse id elit molestie, iaculis quam at, pharetra mauris. Suspendisse varius semper nibh ut consequat. Mauris sollicitudin eros facilisis orci condimentum'
          />

          {/* ROW 3 */}
          <Project
            title='Project 6'
            subtitle='Etiam id nisi ullamcorper, pretium eros et, laoreet metus. Duis at nisl condimentum, congue metus luctus, lacinia est. Ut pharetra in urna eget egestas.'
          />
          <Project
            title='Project 7'
            subtitle='Ut lorem velit, vehicula ut purus quis, varius fermentum nulla. Praesent feugiat commodo faucibus. Nulla volutpat libero in nisl finibus, eget vulputate justo congue.'
          />
          {/* Static Text */}
          <div
            className='flext justify-center text-center items-center p-10 bg-blue
          max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold
        '
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
