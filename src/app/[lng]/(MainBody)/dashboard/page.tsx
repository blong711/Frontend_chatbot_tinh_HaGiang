'use client'
import React, { useState } from 'react';
import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import ChatBox from "@/Components/ChatBox";

const DashboardPage = () => {
  const Sample = [{ text: "Prior to publishing content on social media" }];
  const [isChatBoxVisible, setIsChatBoxVisible] = useState(false);

  const toggleChatBox = () => {
    setIsChatBoxVisible(!isChatBoxVisible);
  };  

  return (
    <>
      <CommonBreadcrumb pageTitle="Dashboard" parent="Dashboard" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader heading="Home Page" subHeading={Sample} />
              <CardBody>
                <p>While written content continues to reign supreme as the cornerstone of every brand's digital marketing strategy, video and image-based content are becoming more and more prominent in the world of content marketing. The regular blog, social media posts, and a wide range of other written content formats are just a few examples.</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      {isChatBoxVisible && <ChatBox toggleChatBox={toggleChatBox} isChatBoxVisible={isChatBoxVisible} />}
      <div className="position-fixed" style={{right: '5%', bottom: '15%'}}>
        <button onClick={toggleChatBox} style={{ border: 'none', backgroundColor: '#007bff', color: 'white', borderRadius: '50%', width: '60px', height: '60px', fontSize: '24px', boxShadow: '0px 0px 10px rgba(0, 123, 255, 0.5)', cursor: 'pointer', transition: 'all 0.3s ease' }}>
          <i className='icon-comment'></i>
        </button>
      </div>
    </>
  );
};

export default DashboardPage;
