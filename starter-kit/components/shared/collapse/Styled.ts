import styled from 'styled-components';
import { ECollapseType } from '../../../../base/constants/common';
import { ArrowDown2Icon } from '../../shared/icons';

export const Wrapper = styled.div`
  &.${ECollapseType.PRIMARY} {
    background: var(--collapse-bg);
    border-radius: var(--collapse-radius);
    padding: var(--collapse-padding);
    margin: var(--collapse-margin);
  }

  &.${ECollapseType.SECONDARY} {
  }

  &.show {
    .cl-content {
      display: block;
    }
  }
`;

export const Title = styled.div`
  word-wrap: break-word;
  display: flex;
  width: 100%;
  align-items: center;
  align-content: center;

  &.${ECollapseType.PRIMARY} {
    background: var(--collapse-title-bg);
    border-radius: var(--collapse-title-radius);
  }

  &.${ECollapseType.SECONDARY} {
    border-bottom: var(--collapse-title-second-border);
    padding: var(--collapse-title-second-padding);
  }
`;

export const TitleBtn = styled.button`
  display: flex;
  align-items: center;
  align-content: center;
  width: 100%;

  &.${ECollapseType.PRIMARY} {
    padding: var(--collapse-title-padding);
    min-height: var(--collapse-title-height);
    font-weight: var(--collapse-title-weight);
    font-size: var(--collapse-title-size);
    line-height: var(--collapse-title-line-height);
    letter-spacing: var(--collapse-title-spacing);
    text-transform: var(--collapse-title-transform);
    color: var(--collapse-title-color);
    svg {
      margin-right: 10px;
      min-width: 25px;
    }
  }

  &.${ECollapseType.SECONDARY} {
    justify-content: space-between;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #916b46;
    padding: 5px 0;

    svg {
      margin-left: 10px;
      min-width: 25px;
    }
  }
`;

export const Count = styled.span`
  margin-left: 0.25rem;
`;

export const Content = styled.div`
  display: none;
  &.${ECollapseType.PRIMARY} {
    transition-duration: 0.1s;
    background: var(--collapse-content-bg);
    border: var(--collapse-content-border);
    border-radius: var(--collapse-content-radius);
    margin: var(--collapse-content-margin);
    padding: var(--collapse-content-padding);
  }

  &.${ECollapseType.SECONDARY} {
    padding: 20px 0;
    border-bottom: 1px solid #f3eadb;
  }
`;

export const ArrowIcon = styled(ArrowDown2Icon)`
  transition: transform 0.2s ease-in-out;
  transform: rotate(-180deg);
  width: 1.25rem;
  height: 1.25rem;
  margin-left: auto;
  flex-shrink: 0;
  margin-right: 0 !important;

  &.${ECollapseType.PRIMARY} {
    color: var(--collapse-title-arrow-color);
  }

  &.${ECollapseType.SECONDARY} {
    color: #916b46;
  }

  &.show {
    transform: rotate(0);
  }
`;
