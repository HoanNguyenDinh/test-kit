import { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { ShareIcon } from '../../shared/icons/index';
import { FacebookShareButton, TelegramShareButton, TwitterShareButton } from 'react-share';
import CopyIcon from '../../shared/icons/copyIcon';
import FacebookIcon from '../../shared/icons/facebookIcon';
import TwitterIcon from '../../shared/icons/twitter2Icon';
import TeleGramIcon from '../../shared/icons/telegramIcon';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Wrapper, ShareButton, Dropdown, List, Item, ShareImage, CopyButton, Sharetext } from './Styled';

type Props = {
  title: string;
  content: string;
  url: string;
  label?: string;
  isCollectionPage?: boolean;
};

const NTFShare = (props: Props) => {
  const { title, content, url, label, isCollectionPage } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      const refShare = e.target.closest('#share');
      if (isOpen && !refShare) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isOpen]);

  const urlTwitterShare = isCollectionPage ? `${url}` : `${url}&text=${title}`;

  return (
    <Wrapper id='share'>
      <ShareButton onClick={handleClick}>
        <ShareIcon />
        {label ? <Sharetext>{label}</Sharetext> : null}
      </ShareButton>
      {isOpen && (
        <Dropdown>
          <List>
            <Item>
              <CopyToClipboard text={`${url}`}>
                <CopyButton>
                  <CopyIcon />
                  Copy to Clipboard
                </CopyButton>
              </CopyToClipboard>
            </Item>
            <Item className='icon-round'>
              <FacebookShareButton url={`${url}`} quote={content}>
                <FacebookIcon />
                Share on Facebook
              </FacebookShareButton>
            </Item>
            <Item className='icon-round'>
              <TwitterShareButton url={urlTwitterShare}>
                <TwitterIcon />
                Share on Twitter
              </TwitterShareButton>
            </Item>
            <Item>
              <TelegramShareButton url={`${url}`}>
                <TeleGramIcon />
                Share on Telegram
              </TelegramShareButton>
            </Item>
          </List>
        </Dropdown>
      )}
    </Wrapper>
  );
};

export default observer(NTFShare);
