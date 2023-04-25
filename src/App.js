import React from 'react';
import "@patternfly/react-core/dist/styles/base.css";
import "@patternfly/patternfly/patternfly.css"

import {
  Button,
  Card,
  CardBody,
  Flex,
  FlexItem,
  Grid,
  Page,
  Masthead,
  MastheadToggle,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  PageSidebar,
  PageSection,
  PageSectionVariants,
  PageToggleButton,
  Pagination,
  Title,
  TitleSizes,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  Stack,
  StackItem,
  Tabs,
  Tab,
  TabContent,
  TabTitleText,
  Tooltip,
  CardTitle,
  CardFooter,
  Gallery,
  Split,
  GalleryItem,
  GridItem,
  SplitItem,
  Bullseye,
  EmptyStatePrimary,
  Level,
  LevelItem,
  BackgroundImage,
} from '@patternfly/react-core'

import Overview from './Overview';
import Homepage from './Homepage';
//import Collections from './Collections';

import {
  TimesIcon
} from '@patternfly/react-icons';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import GithubIcon from '@patternfly/react-icons/dist/esm/icons/github-icon'; 
import AnisbleIcon from '@patternfly/react-icons/dist/esm/icons/ansible-tower-icon'; 
import logo from './logo.svg';
//import redHatRuntimeLogo from './images/red-hat-runtime-logo.svg';
import Background from './images/pfbg_1200.jpg';
import './App.css';

class SeparateTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 0,
      homeHidden: false,
      overviewHidden: true
    };

    this.contentRef1 = React.createRef();
    this.contentRef2 = React.createRef();
    this.contentRef3 = React.createRef();
    this.contentRef4 = React.createRef();
    this.contentRef5 = React.createRef();

    // Toggle currently active tab
    this.handleTabClick = (event, tabIndex) => {
      // have to hide the homepage in the case the 'Learn More' button is clicked
      if (tabIndex === 0) {
        this.setState({
          activeTabKey: tabIndex,
          homeHidden: false,
          overviewHidden: true
        });
      } else if (tabIndex === 1){
        this.setState({
          activeTabKey: tabIndex,
          homeHidden: true,
          overviewHidden: false
        });
      } else {
        this.setState({
          activeTabKey: tabIndex,
          homeHidden: true,
          overviewHidden: true
        });
      }
      console.log(this.overviewHidden)
    };

  }

  

  render() {
    return ( 
      <React.Fragment>
        <BackgroundImage src={Background}/> 
        <Split hasGutter className="navbar">       
          <SplitItem isFilled hasGutter> 
            
          </SplitItem>
          
        </Split>
        <div className='page-padding'>  
        </div>
      </React.Fragment>
    );
  }
}

// get the current year for the footer
const getCurrYear = () => {
  var today = new Date(),
  currYear = today.getFullYear();
  return currYear;
}

function App() {
  return (
    <span>
      <SeparateTabs />
      <footer className="footer">&#169; {getCurrYear()} - Red Hat</footer>
    </span>
  );
}

export default App;