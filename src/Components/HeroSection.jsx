import React from "react";
import styled from 'styled-components';

const HeroSection = () => {
  return (
    <HeroContainer>
      <picture className="pic">
        <source
          media="(min-width: 960px)"
          srcSet="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enIN/Images/HPMH_tcm209-977590.png"
        />
        <source
          media="(min-width: 600px)"
          srcSet="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_960,w_960/enIN/Images/1600x1600_tcm209-977592.jpg"
        />
        <source srcSet="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_600,w_600/enIN/Images/750x1100_tcm209-977591.jpg" />
        <img
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enIN/Images/HPMH_tcm209-977590.png"
          class="performance-item"
          width="100%"
          alt="HeroSection"
        />
      </picture>
      <div className="container">
        <div className="content">
          <h1>50% OFF</h1>
          <h1>All Sports Items</h1>
        </div>
      </div>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  position: relative;
  .container {
    border: 1px solid red;
  }
  @media(min-width:576px){}
  @media(min-width:768px){}
  @media(min-width:992px){}
  @media(min-width:1200px){}
  
`;

export default HeroSection;