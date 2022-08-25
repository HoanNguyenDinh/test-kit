import { FC, useMemo } from 'react';
import { observer } from 'mobx-react';
import { CustomDialog, CustomDialogContent, Content, Progress, CircularProgressIcon, Description, Note, Link } from './Styled';

interface ILoadingDialogProps {
  open: boolean;
}

export const LoadingDialog: FC<ILoadingDialogProps> = (props) => {
  const { open } = props;

  const modalContent = useMemo(() => {
    return (
      <CustomDialogContent id='buy-now-dialog-description'>
        <Content>
          <Progress>
            <CircularProgressIcon size={24} thickness={7} />
            Do not close this window
          </Progress>
          <Description>After wallet approval, your transaction will be finished in about 3s.</Description>
          <Note>
            While you are waiting. Join our{' '}
            <Link href='https://discord.com/invite/magiceden' title={'Discord'}>
              discord
            </Link>{' '}
            &{' '}
            <Link href='https://twitter.com/MagicEden' title={'Twitter'}>
              twitter
            </Link>{' '}
            community for weekly giveaways
          </Note>
        </Content>
      </CustomDialogContent>
    );
  }, []);

  return (
    <CustomDialog open={open} aria-describedby='buy-now-dialog-description' className='buy-now-dialog'>
      {modalContent}
    </CustomDialog>
  );
};

export default observer(LoadingDialog);
