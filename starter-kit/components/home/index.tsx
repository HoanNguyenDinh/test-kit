import { FC, useContext } from 'react';
import { CommonStoreContext } from '../../../base/stores/common';
import {
  HomeWrapper,
  ColourOkay,
  ColourOkayItem,
  ColourOkayItemImage,
  BlackOkay,
  BlackOkayItem,
  BlackOkayItemImage,
  OkayDesktopTitle,
  OkayMobileTitle,
  ColourMobileOkay
} from './Styled';

const HomeSection: FC = () => {
  const commonStore = useContext(CommonStoreContext);
  const brandSymbol = commonStore.brandSymbol || 'okay_bears';

  const isOkayBear = brandSymbol === 'okay_bears' ? true : false;

  if (!isOkayBear) {
    return <></>;
  }

  return (
    <HomeWrapper>
      <OkayDesktopTitle>
        <ColourOkay>
          <ColourOkayItem className='o-okay'>
            <ColourOkayItemImage src='https://assets-global.website-files.com/621f2ae39342fe5b34cc196f/6229a9b8f02d26602ae2ac99_Green%20O.png' />
          </ColourOkayItem>
          <ColourOkayItem className='k-okay'>
            <ColourOkayItemImage src='https://assets-global.website-files.com/621f2ae39342fe5b34cc196f/6229a9d35ca27b36b2ad27d5_Blue-K.png' />
          </ColourOkayItem>
          <ColourOkayItem className='a-okay'>
            <ColourOkayItemImage src='https://assets-global.website-files.com/621f2ae39342fe5b34cc196f/6229a9f818f7b9952912c89e_Purple-A.png' />
          </ColourOkayItem>
          <ColourOkayItem className='y-okay'>
            <ColourOkayItemImage src='https://assets-global.website-files.com/621f2ae39342fe5b34cc196f/6229aa571d28bf0b7a90af8f_Yellow_Y.png' />
            <ColourOkayItemImage
              className='bears'
              src='https://assets-global.website-files.com/621f2ae39342fe5b34cc196f/62205a99f178ba61ca99ec90_TitleSection-Bears.svg'
            />
          </ColourOkayItem>
          <BlackOkay>
            <BlackOkayItem className='o-okay'>
              <BlackOkayItemImage src='https://assets-global.website-files.com/621f2ae39342fe5b34cc196f/621f2e39b978735216e2ca6f_OKB-O.svg' />
            </BlackOkayItem>
            <BlackOkayItem className='k-okay'>
              <BlackOkayItemImage src='https://assets-global.website-files.com/621f2ae39342fe5b34cc196f/621f2eb03586c1ad602f556a_OKB-K.svg' />
            </BlackOkayItem>
            <BlackOkayItem className='a-okay'>
              <BlackOkayItemImage src='https://assets-global.website-files.com/621f2ae39342fe5b34cc196f/621f2eb4a9cce950b774bfd6_OKB-A.svg' />
            </BlackOkayItem>
            <BlackOkayItem className='y-okay'>
              <BlackOkayItemImage src='https://assets-global.website-files.com/621f2ae39342fe5b34cc196f/621f2eb99342fe6cb8cc3083_OKB-Y.svg' />
            </BlackOkayItem>
          </BlackOkay>
        </ColourOkay>
      </OkayDesktopTitle>
      <OkayMobileTitle>
        <ColourMobileOkay>
          <ColourOkayItemImage src='https://assets-global.website-files.com/621f2ae39342fe5b34cc196f/622716b31bbbe0c131a87e44_Mobile-OKB.png' />
        </ColourMobileOkay>
      </OkayMobileTitle>
    </HomeWrapper>
  );
};

export default HomeSection;
