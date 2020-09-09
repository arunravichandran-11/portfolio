import React from 'react';
import {shallow, mount} from 'Enzyme';
import Awards from './award.js';

const defaultProps = {
  awards: [
    {
      name: 'SpotLight',
      image: 'IMG_1174.jpg',
      description: 'For best performance',
    },
    {
      name: 'Certificate of Excellence',
      image: 'IMG_1062.jpg',
      description: 'For best performance',
    },
  ],
  certifications: [
    {
      name: 'SAFe',
      image: 'certified-safe-4-practitioner.png',
      description: 'Certificied Agile Practitioner',
    },
  ],
};

test('awards-test', () => {
  //   const wrapper = mount(
  //     <UserContext.Provider value={defaultProps}>
  //       <About />
  //     </UserContext.Provider>
  //   );

  const wrapper = shallow(<Awards {...defaultProps} />);

  expect(wrapper.exists()).toBe(true);
});
