import React from 'react'
import Pagination from '../components/Pagination'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { setCurrentPage } from '../actions/PlayersActions';
import actions from '../actions/PlayersActions'

configure({ adapter: new Adapter() })
jest.mock(actions)

describe(`测试<Pagination />`, () => {

	const playersById = [
    {
      name: 'LeBron James',
      team: 'LOS ANGELES LAKERS',
      position: 'SF',
      starred: true,
    },
    {
      name: 'Kevin Duran',
      team: 'GOLDEN STATE WARRIORS',
      position: 'SF',
      starred: false,
    },
    {
      name: 'Anthony Davis',
      team: 'NEW ORLEANS PELICANS',
      position: 'PF',
      starred: false,
    },
    {
      name: 'Stephen Curry',
      team: 'GOLDEN STATE WARRIORS',
      position: 'PG',
      starred: false,
    },
    {
      name: 'James Harden',
      team: 'HOUSTON ROCKETS',
      position: 'SG',
      starred: false,
    },
    {
      name: 'Kawhi Leonard',
      team: 'TORONTO RAPTORS',
      position: 'SF',
      starred: false,
    },
	]
	
	const warpper = mount(<Pagination playersById={playersById} setCurrentPage={setCurrentPage}/>)
  console.log(warpper.debug())
	it(' 包含一个div标签', () => {
	  expect(warpper.find('div').length).toBe(1)
	})

  })
  