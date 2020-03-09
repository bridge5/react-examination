import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme'

import FilterPlayer from '../FilterPlayer';

Enzyme.configure({ adapter: new Adapter() });


const wrapper = shallow(<FilterPlayer />);

// todo
