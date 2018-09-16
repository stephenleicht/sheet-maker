import * as React from 'react';

import CharacterSheet from './CharacterSheet';

import Pane from './Pane';
import Menu from './Menu';
import GreebleBox from './GreebleBox';

import * as styles from './App.css';

interface AppState {
  smallText: boolean,
}

class App extends React.Component<{}, AppState> {
  state: AppState = {
    smallText: true,
  }

  render() {
    const smallText = this.state.smallText;

    return (
      <div className={styles.container}>
        <button onClick={() => this.setState({ smallText: !smallText })}>Change</button>
        <GreebleBox cutSize={50} corners={{ tr: true, br: false, tl:false, bl: true }} strokeWidth={3}>
          <div style={{padding: '8px'}}>
            {smallText ?
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim.' :
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non elit eget arcu tempor semper in vitae tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean sed.'}
          </div>
        </GreebleBox>
        <Pane>
          <div className={styles.menu}>
            <Menu></Menu>
          </div>
        </Pane>
        {/* <CharacterSheet /> */}
      </div>
    );
  }
}

export default App;