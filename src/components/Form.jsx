// @flow

import * as React from 'react';
import {
  type FieldProps,
  Field,
} from 'redux-form';
import styled from 'styled-components';
import { hex2rgb } from '../utils/colors';
import ColorPicker from './ColorPicker';
import Icon from './Icon';
import Switch from './Switch';
import TextField from './TextField';

const Container = styled.section`
  padding: 0 30px;

  @media (min-width: 960px) {
    width: 50%;
  }
`;

const Section = styled.section`
  margin-bottom: 50px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    align-items: center;
    flex-direction: row;
  }
`;

const Item = styled.div`
  margin-left: 30px;
  margin-top: 30px;

  @media (min-width: 600px) {
    &:not(:first-child) {
      margin-left: 40px;
    }
  }
`;

const Title = styled.h2`
  display: none;
`;

const Headline = styled.h3`
  color: #666;
  font-size: 1rem;
  font-weight: bold;
  margin: 0;

  svg {
    margin-right: 0.5rem;
  }
`;

type Props = {
  change: (string, any) => void,
  saveChatStyles: () => void,
  showAuthorName: boolean,
  showAvatar: boolean,
  showBadge: boolean,
  showOutline: boolean,
  showTimestamp: boolean,
};

type ExtendedFieldProps = FieldProps & {
  disabled?: boolean,
  label?: string,
  type?: string,
};

export default class Form extends React.Component<Props> {
  interval: ?IntervalID = null;

  static defaultProps = {
    showAuthorName: true,
    showAvatar: true,
    showBadge: true,
    showOutline: true,
    showTimestamp: false,
  };

  componentDidMount() {
    const { saveChatStyles } = this.props;

    this.interval = setInterval(() => {
      saveChatStyles();
    }, 1000);
  }

  shouldComponentUpdate(nextProps: Props) {
    const {
      showAuthorName,
      showAvatar,
      showBadge,
      showOutline,
      showTimestamp,
    } = this.props;

    return showAuthorName !== nextProps.showAuthorName
      || showBadge !== nextProps.showBadge
      || showAvatar !== nextProps.showAvatar
      || showOutline !== nextProps.showOutline
      || showTimestamp !== nextProps.showTimestamp;
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  renderColorPicker = (fieldProps: ExtendedFieldProps): React.Element<typeof ColorPicker> => {
    const { change } = this.props;
    const { disabled, input, label } = fieldProps;

    return (
      <ColorPicker
        color={input.value || { rgb: hex2rgb('#ffffff') }}
        disabled={disabled}
        label={label}
        onChange={({ rgb }) => change(input.name, { rgb })}
      />
    );
  }

  // eslint-disable-next-line class-methods-use-this
  renderSwitch({ disabled, input, label }: ExtendedFieldProps): React.Element<typeof Switch> {
    return (
      <Switch
        checked={!!input.value}
        disabled={disabled}
        label={label}
        onChange={input.onChange}
      />
    );
  }

  // eslint-disable-next-line class-methods-use-this
  renderTextField(fieldProps: ExtendedFieldProps): React.Element<typeof TextField> {
    const {
      disabled,
      input,
      label,
      type,
    } = fieldProps;

    return (
      <TextField
        disabled={disabled}
        label={label}
        type={type}
        {...input}
      />
    );
  }

  render() {
    const {
      showAuthorName,
      showAvatar,
      showBadge,
      showOutline,
      showTimestamp,
    } = this.props;

    return (
      <Container>
        <Title>
          フォーム
        </Title>
        <Section>
          <Headline>
            <Icon name="account_circle" />
            アイコン
          </Headline>
          <Content>
            <Item>
              <Field
                component={this.renderSwitch}
                label="表示する"
                name="showAvatar"
              />
            </Item>
            <Item>
              <Field
                component={this.renderTextField}
                disabled={!showAvatar}
                label="大きさ"
                name="avatarSize"
                type="number"
              />
            </Item>
          </Content>
        </Section>
        <Section>
          <Headline>
            <Icon name="watch_later" />
            タイムスタンプ
          </Headline>
          <Content>
            <Item>
              <Field
                component={this.renderSwitch}
                label="表示する"
                name="showTimestamp"
              />
            </Item>
            <Item>
              <Field
                component={this.renderTextField}
                disabled={!showTimestamp}
                label="大きさ"
                name="timestampSize"
                type="number"
              />
            </Item>
            <Item>
              <Field
                component={this.renderColorPicker}
                disabled={!showTimestamp}
                label="色"
                name="timestampColor"
              />
            </Item>
          </Content>
        </Section>
        <Section>
          <Headline>
            <Icon name="person" />
            名前
          </Headline>
          <Content>
            <Item>
              <Field
                component={this.renderSwitch}
                label="表示する"
                name="showAuthorName"
              />
            </Item>
            <Item>
              <Field
                component={this.renderTextField}
                disabled={!showAuthorName}
                label="大きさ"
                name="authorNameSize"
                type="number"
              />
            </Item>
            <Item>
              <Field
                component={this.renderColorPicker}
                disabled={!showAuthorName}
                label="色"
                name="authorNameColor"
              />
            </Item>
          </Content>
          <Content>
            <Item>
              <Field
                component={this.renderColorPicker}
                disabled={!showAuthorName}
                label="オーナー"
                name="ownerAuthorNameColor"
              />
            </Item>
            <Item>
              <Field
                component={this.renderColorPicker}
                disabled={!showAuthorName}
                label="モデレーター"
                name="moderatorAuthorNameColor"
              />
            </Item>
            <Item>
              <Field
                component={this.renderColorPicker}
                disabled={!showAuthorName}
                label="メンバー"
                name="memberAuthorNameColor"
              />
            </Item>
          </Content>
        </Section>
        <Section>
          <Headline>
            <Icon name="star_border" />
            バッジ
          </Headline>
          <Content>
            <Item>
              <Field
                component={this.renderSwitch}
                label="表示する"
                name="showBadge"
              />
            </Item>
            <Item>
              <Field
                component={this.renderSwitch}
                disabled={!showBadge}
                label="モデレーター"
                name="showModeratorBadge"
              />
            </Item>
            <Item>
              <Field
                component={this.renderSwitch}
                disabled={!showBadge}
                label="メンバー"
                name="showMemberBadge"
              />
            </Item>
          </Content>
        </Section>
        <Section>
          <Headline>
            <Icon name="chat" />
            メッセージ
          </Headline>
          <Content>
            <Item>
              <Field
                component={this.renderTextField}
                disabled={!showAuthorName}
                label="大きさ"
                name="messageSize"
                type="number"
              />
            </Item>
            <Item>
              <Field
                component={this.renderColorPicker}
                disabled={!showAuthorName}
                label="色"
                name="messageColor"
              />
            </Item>
          </Content>
        </Section>
        <Section>
          <Headline>
            <Icon name="adjust" />
            アウトライン
          </Headline>
          <Content>
            <Item>
              <Field
                component={this.renderSwitch}
                label="表示する"
                name="showOutline"
              />
            </Item>
            <Item>
              <Field
                component={this.renderTextField}
                disabled={!showOutline}
                label="太さ"
                name="outlineSize"
                type="number"
              />
            </Item>
            <Item>
              <Field
                component={this.renderColorPicker}
                disabled={!showOutline}
                label="色"
                name="outlineColor"
              />
            </Item>
          </Content>
        </Section>
        <Section>
          <Headline>
            <Icon name="settings" />
            その他
          </Headline>
          <Content>
            <Item>
              <Field
                component={this.renderSwitch}
                label="スーパーチャットの背景を表示する"
                name="showSuperChatBackground"
              />
            </Item>
          </Content>
          <Content>
            <Item>
              <Field
                component={this.renderSwitch}
                label="メンバー登録アナウンスの背景を表示する"
                name="showNewMemberBackground"
              />
            </Item>
          </Content>
        </Section>
      </Container>
    );
  }
}
