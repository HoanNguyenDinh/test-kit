import { FC } from 'react';
import { ISelectedItem } from '../../../../base/interfaces/common';
import { getImageUrl } from '../../../../base/utils/image.helper';
import { Wrapper, Container, InnerWrap, Title, List, Item, ImageWapper, Image, Actions, ActionBtn, CancelBtn } from './Styled';

type Props = {
  title?: string;
  open: boolean;
  items: ISelectedItem[];
  action: {
    text: string;
    handle: () => void;
  };
  handleCancel: () => void;
};

export const SelectedItems: FC<Props> = (props) => {
  const { title = 'Selected', open, items = [], action, handleCancel } = props;

  return (
    <Wrapper className={open ? 'active' : ''}>
      <Container>
        <InnerWrap>
          <Title>{title}</Title>
          <List>
            {items.map((item: ISelectedItem, index: number) => (
              <Item key={`selected-item-${index}`}>
                <ImageWapper>
                  <Image src={getImageUrl(item.image, { w: 96, h: 80 })} alt={item.title} />
                </ImageWapper>
              </Item>
            ))}
          </List>
          <Actions>
            <ActionBtn onClick={() => action.handle()}>{action.text}</ActionBtn>
            <CancelBtn onClick={() => handleCancel()}>Cancel</CancelBtn>
          </Actions>
        </InnerWrap>
      </Container>
    </Wrapper>
  );
};

export default SelectedItems;
