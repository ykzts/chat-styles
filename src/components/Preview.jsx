import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import BuildIcon from '@material-ui/icons/Build';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';

const defaultAvatar = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2M4wcDwHwAEJAHIKWRiOAAAAABJRU5ErkJggg==';
const memberBadge = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACFElEQVRIS61WwW7TQBCdGZdUlWqbxg43xE9woEKIr+BLsDn3HudL+IuqAiQ+gRtH5FjUKSAaeV+1a8f12uuYoNgHK9qZebNvZt6Eaey5onmwmX9jkgti5tpMf9B+CAAIRfl9/Zw+0h9XqMbRPvLT6LOAXxEz6XffYyD0C3WzWRVv+rYDbz+NtgI5aZPeG/7xUAMpVtvNcj3rulgAT5O4Ihb5x5gDs+Y2qsxyb3fYAujMPfJOhsFBhIZ765CJGE1dbC+Faltm9U0MgJ9GXwXyckALdEH31MCct2FalIauL5vl+pJJd8tdvBbuMTMV3Ep6eBNA0e15fspBGuUMiazsDwreIPV86npUBQdJrISlw4Ob18nCO+iCAjhMFrCzd9ZtMr4x6OWmAOIwXcAepv+8gQNBk3RcAEcdOEyewe7EI96gpigGU7dFjwhAykHR8eKTKbK7TYfTOd1GOjPbT6u5BiiE5cIezAmJcKE5hhOqKpje0VnwYvFb+ppzyDS7gmupyPI6qv9+8UmYLt1it48urbR6MG1B1DJRAdd3q/xtexIk0b2w92RUro00dx4t4aNyrbZllj/K9c4tSOOKwXLoNtv5G4FjqHLpWDg7I/9D9FeUzA4FabbZfZnlp92LOrfJeRLfeESvub8jRnpVa38FMpz3TcbX1RXNwl/zHwwv1KJVr66Gd/MTxGD9z+Xn7Sq327yD8gAAwftWKrM+vwAAAABJRU5ErkJggg==';

const authorShape = PropTypes.shape({
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
});

const Avatar = ({ author, height, width }) => (
  <yt-img-shadow class="no-transition" id="author-photo" loaded="">
    <img alt="" height={height} id="img" src={author.avatar || defaultAvatar} width={width} />
  </yt-img-shadow>
);

Avatar.propTypes = {
  author: authorShape.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
};

Avatar.defaultProps = {
  height: 24,
  width: 24,
};

const TextMessage = ({ author, message }) => {
  const props = {
    ...(author.type === 'owner' ? {
      'is-highlighted': '',
    } : {}),
  };
  return (
    <yt-live-chat-text-message-renderer author-type={author.type} {...props}>
      <Avatar author={author} />
      <div id="content">
        <span id="timestamp">
          2:00 PM
        </span>
        <yt-live-chat-author-chip highlights-enabled="">
          <span id="chat-badges">
            {['moderator', 'member'].includes(author.type) && (
              <yt-live-chat-author-badge-renderer type={author.type}>
                <div id="image">
                  {author.type === 'moderator' && (
                    <yt-icon>
                      <BuildIcon fontSize="inherit" />
                    </yt-icon>
                  )}
                  {author.type === 'member' && (
                    <img alt="" src={memberBadge} />
                  )}
                </div>
              </yt-live-chat-author-badge-renderer>
            )}
          </span>
          <span id="author-name" type={author.type}>
            {author.name}
            <span id="chip-badges" />
          </span>
        </yt-live-chat-author-chip>
        &#8203;
        <span id="message">
          {message}
        </span>
      </div>
    </yt-live-chat-text-message-renderer>
  );
};

TextMessage.propTypes = {
  author: authorShape.isRequired,
  message: PropTypes.string.isRequired,
};

const PaidMessage = ({ author, message }) => {
  const paidProps = {
    ...(!message ? {
      'show-only-header': '',
    } : {}),
  };
  return (
    <yt-live-chat-paid-message-renderer allow-animations {...paidProps}>
      <div id="card">
        <div id="header">
          <Avatar author={author} height={40} width={40} />
          <div id="header-content">
            <div id="header-content-primary-column">
              <div id="author-name">
                {author.name}
              </div>
              <div id="purchase-amount">
                ￥ 1,000
              </div>
            </div>
            <span id="timestamp">
              2:00 PM
            </span>
          </div>
        </div>
        {message && (
          <div id="content">
            <div id="message">
              {message}
            </div>
          </div>
        )}
      </div>
    </yt-live-chat-paid-message-renderer>
  );
};

PaidMessage.propTypes = {
  author: authorShape.isRequired,
  message: PropTypes.string,
};

PaidMessage.defaultProps = {
  message: null,
};

// eslint-disable-next-line react/prefer-stateless-function
export default class Preview extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Typography className={classes.title} variant="subheading">
          プレビュー
        </Typography>
        <Paper className={classes.paper}>
          <yt-live-chat-renderer>
            <yt-live-chat-ticker-renderer />
            <yt-live-chat-item-list-renderer allow-scroll>
              <TextMessage author={{ name: '芥川 龍之介', type: 'owner' }} message="堀川の大殿様のやうな方は" />
              <TextMessage author={{ name: '森 鴎外', type: 'moderator' }} message="石炭をば早や積み果てつ" />
              <TextMessage author={{ name: '夏目 漱石', type: 'member' }} message="吾輩は猫である。名前はまだ無い" />
              <TextMessage author={{ name: '太宰 治' }} message="朝、食堂でスウプを一さじ、すっと吸ってお母さまが" />
              <yt-live-chat-legacy-paid-message-renderer>
                <div id="card">
                  <Avatar author={{ name: '太宰 治' }} height={40} width={40} />
                  <div id="content">
                    <div id="author-name">
                      太宰 治
                    </div>
                    <div id="event-text">
                      新規メンバー
                    </div>
                    <div id="detail-text">
                      ようこそ、太宰 治 さん！
                    </div>
                  </div>
                </div>
              </yt-live-chat-legacy-paid-message-renderer>
              <TextMessage author={{ name: '中島 敦' }} message="隴西の李徴は博学才穎、天宝の末年、若くして名を虎榜に連ね、ついで江南尉に補せられたが、性、狷介、自ら恃ところ頗厚く、賤吏に甘んずるを潔しとしなかった。いくばくもなく官を退いた後は、故山、かく略に帰臥し、人と交を絶って、ひたすら詩作に耽った" />
              <PaidMessage author={{ name: '宮沢 賢治' }} />
              <TextMessage author={{ name: '太宰 治', type: 'member' }} message="「あ」と幽かな叫び声をお挙げになった" />
              <PaidMessage author={{ name: '福沢 諭吉' }} message="「天は人の上に人を造らず人の下に人を造らず」と言えり" />
              <TextMessage author={{ name: '太宰 治', type: 'member' }} message="「髪の毛？」" />
              <TextMessage author={{ name: '樋口 一葉' }} message="廻れば大門の見返り柳いと長けれど" />
              <TextMessage author={{ name: '太宰 治', type: 'member' }} message="スウプに何か、イヤなものでも入っていたのかしら、と思った" />
            </yt-live-chat-item-list-renderer>
          </yt-live-chat-renderer>
        </Paper>
      </Fragment>
    );
  }
}
