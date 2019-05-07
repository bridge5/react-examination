import React from 'react';
import { shallow } from 'enzyme';
import { PlayerList , PlayerListItem } from '../index';

describe('<PlayerList/>', () => {
  test('Should render <PlayerList/> without crashing', () => {
    shallow(
      <PlayerList
        players={[
          {
            name: "LeBron James",
            team: "LOS ANGELES LAKERS",
            position: "SF",
            starred: true
          }
        ]}
        actions={{
          addPlayer: () => {},
          deletePlayer: () => {},
          starPlayer: () => {},
          filterPlayer: () => {},
          selectPageNum: () => {}
        }}
      />
    );
  })

  test('Should find <PlayerListItem/> in <PlayerList/>', () => {
    const wrapper = shallow(
      <PlayerList
        players={[
          {
            name: "LeBron James",
            team: "LOS ANGELES LAKERS",
            position: "SF",
            starred: true
          }
        ]}
        actions={{
          addPlayer: () => {},
          deletePlayer: () => {},
          starPlayer: () => {},
          filterPlayer: () => {},
          selectPageNum: () => {}
        }}
      />
    );
    expect(wrapper.find(PlayerListItem)).toHaveLength(1)
  })
})
