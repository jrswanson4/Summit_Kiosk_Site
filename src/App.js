import React from 'react';
import "@patternfly/react-core/dist/styles/base.css";
import "@patternfly/patternfly/patternfly.css";
import { useState } from "react";
import { ReactDOM } from 'react';


import {
  Stack,
  StackItem,
  BackgroundImage,
  Flex,
  Button,
  Popover,
  Gallery,
  TextList,
  TextListItem,
  TextInputTypes,
  TextContent
} from '@patternfly/react-core'

import Background from './images/pfbg_1200.jpg';
import Celona from './images/Celona-logo_CMYK.png'
import RH_Verizon from './images/Logo-Red_HatVerizon-A-Reverse-RGB.png'
import RH_Intel from './images/Logo-Red_Hat-Intel-A-Reverse-RGB.png'
import Video from './videos/RHEL-provisioning.mp4'
import './App.css';
//import Video from './Video'




class SeparateTabs extends React.Component {


  render() {

    return (
      <React.Fragment>
        <BackgroundImage src={Background} />
        <Flex className='Flex-options'>
          <Stack className='Stack-options'>
            <StackItem className='stack-item-padding'>
              <img src={RH_Verizon} className='logo_verizon' />
              <img src={Celona} className='logo' />
              <img src={RH_Intel} className='logo_intel' />
            </StackItem>
            <StackItem isFilled className='stack-item-padding'>
              <h1 className='h1'>Red Hat Edge Device Provisioning</h1>
              <video className='video' controls>
                <source src={Video} type="video/mp4" />
              </video>
            </StackItem>
            <Popover aria-label="Basic popover" headerContent={<div className='popover'>Red Hat Device Edge Fun Facts</div>}
              bodyContent={<div >1. It is a platform for deploying workloads onto small devices at the edge <br />2. It includes both Red Hat Enterprise Linux and MicroShift
                <br />3. It lets you use tools and processes to manage up to hundreds of thousands of devices
              </div>} footerContent={<div className='popover'>Remember to head over the the Edge Booth for some swag!</div>}>
              <Button>Click here for fun facts!</Button>
            </Popover>
            <StackItem className='stack-item-padding'>
              <h1 className='h2'>Red Hat Device Edge:</h1> 
              <TextContent>
                <TextList>
                  <TextListItem className='h2'>Is a platform for ensuring stability of deployment of workloads on small devices at the edge</TextListItem>
                  <TextListItem className='h2'>Lets you use tools and processes to consistently manage hundreds to thousands of devices</TextListItem>
                  <TextListItem className='h2'>Use of zero-touch provisioning to allow for quick installation for factory installation or at the customer premises.</TextListItem>
                  <TextListItem className='h2'>Uses Over the Air (OTA) updates to provide quick security remediations throughout the entire lifecycle.</TextListItem>
                  <TextListItem className='h2'>Includes both Red Hat Enterprise Linux and MicroShift</TextListItem> 
                </TextList> 
              </TextContent>
            </StackItem>
          </Stack>
        </Flex>
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