import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Preview from '../components/Preview';

const styles = ({ breakpoints, spacing }) => ({
  paper: {
    margin: spacing.unit * 2,
    padding: spacing.unit * 1,
    [breakpoints.up('md')]: {
      padding: spacing.unit * 3,
    },
  },
  title: {
    fontSize: '1.5rem',
  },
  '@global': {
    'yt-img-shadow': {
      display: 'inline-block',
      flex: 'none',
      opacity: '0',
      transition: 'opacity 0.2s',
      '&[loaded]': {
        opacity: '1',
      },
      '&.no-transition': {
        opacity: '1',
        transition: 'none',
      },
      '& img': {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxHeight: '100%',
        maxWidth: '100%',
      },
    },
    'yt-icon': {
      alignItems: 'center',
      display: 'inline-flex',
      fill: 'currentColor',
      height: 'var(--iron-icon-width, 24px)',
      justifyContent: 'center',
      position: 'relative',
      stroke: 'none',
      verticalAlign: 'middle',
      width: 'var(--iron-icon-height, 24px)',
    },
    'yt-live-chat-renderer': {
      backgroundColor: 'var(--yt-live-chat-background-color, hsl(0, 0%, 100%))',
      color: 'var(--yt-live-chat-primary-text-color, hsl(0, 0%, 6.7%))',
      flex: '1',
      flexBasis: '0.000000001px',
      flexDirection: 'column',
      fontSize: '13px',
      overflow: 'hidden',
      position: 'relative',
      zIndex: '0',
    },
    'yt-live-chat-item-list-renderer': {
      display: 'block',
      flex: '1',
      flexBasis: '0.000000001px',
      overflow: 'hidden',
      zIndex: '0',
    },
    'yt-live-chat-text-message-renderer:not(:first-child), yt-live-chat-legacy-paid-message-renderer:not(:first-child), yt-live-chat-paid-message-renderer:not(:first-child)': {
      borderTop: 'var(--yt-live-chat-item-list-item-border, none)',
    },
    'yt-live-chat-text-message-renderer': {
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'row',
      fontSize: '13px',
      overflow: 'hidden',
      padding: '4px 24px',
      position: 'relative',
      '--yt-endpoint-color': 'var(--yt-live-chat-primary-text-color, hsl(0, 0%, 6.7%))',
      '--yt-endpoint-hover-color': 'var(--yt-live-chat-primary-text-color, hsl(0, 0%, 6.7%))',
      '&[is-highlighted]': {
        backgroundColor: 'var(--yt-live-chat-message-highlight-background-color, #f8f8f8)',
      },
      '& yt-img-shadow': {
        borderRadius: '50%',
        display: 'block',
        flex: 'none',
        marginRight: '16px',
        overflow: 'hidden',
      },
      '& #content': {
        alignSelf: 'center',
        minWidth: '0',
      },
      '& #timestamp': {
        color: 'var(--yt-live-chat-tertiary-text-color, hsla(0, 0%, 6.7%, .4))',
        display: 'var(--yt-live-chat-item-timestamp-display, inline)',
        fontSize: '11px',
        margin: 'var(--yt-live-chat-item-timestamp-margin, 0 8px 0 0)',
      },
      '& yt-live-chat-author-chip': {
        alignItems: 'baseline',
        display: 'inline-flex',
        marginRight: '8px',
      },
      '& #chat-badges:empty': {
        display: 'none',
      },
      '& yt-live-chat-author-chip[highlights-enabled] #chat-badges': {
        order: '1',
      },
      '& yt-live-chat-author-badge-renderer': {
        display: 'inline-block',
        margin: '0 4px 0 0',
        verticalAlign: 'sub',
      },
      '& yt-live-chat-author-chip[highlights-enabled] yt-live-chat-author-badge-renderer': {
        margin: '0 0 0 2px',
      },
      '& yt-live-chat-author-badge-renderer[type="moderator"]': {
        color: 'var(--yt-live-chat-moderator-color, hsl(225, 84%, 66%))',
      },
      '& yt-live-chat-author-badge-renderer[type="member"]': {
        color: 'var(--yt-live-chat-sponsor-color, #107516)',
      },
      '& yt-live-chat-author-badge-renderer img, & yt-live-chat-author-badge-renderer yt-icon': {
        display: 'block',
        fontSize: '16px',
        height: '16px',
        width: '16px',
      },
      '& yt-live-chat-author-badge-renderer yt-icon svg': {
        display: 'block',
        height: '100%',
        pointerEvents: 'none',
        width: '100%',
      },
      '& #author-name': {
        borderRadius: '2px',
        boxSizing: 'border-box',
        color: 'var(--yt-live-chat-secondary-text-color, hsla(0, 0%, 6.7%, .6))',
        fontWeight: '500',
      },
      '&[is-highlighted] #author-name': {
        backgroundColor: '#ffd600',
        padding: '0 4px',
      },
      '&[is-highlighted] #author-name[type="owner"]': {
        color: 'var(--yt-live-chat-message-highlight-text-color, rgba(0, 0, 0, 8.7))',
      },
      '& #author-name[type="owner"]': {
        color: 'var(--yt-live-chat-owner-color, hsl(40, 76%, 55%))',
      },
      '& #author-name[type="moderator"]': {
        color: 'var(--yt-live-chat-moderator-color, hsl(225, 84%, 66%))',
      },
      '& #author-name[type="member"]': {
        color: 'var(--yt-live-chat-sponsor-color, #107516)',
      },
      '& #message': {
        color: 'var(--yt-live-chat-primary-text-color, hsl(0, 0%, 6.7%))',
        lineHeight: '16px',
        overflow: 'hidden',
        overflowWrap: 'break-word',
        wordBreak: 'break-word',
        wordWrap: 'break-word',
      },
    },
    'yt-live-chat-legacy-paid-message-renderer': {
      display: 'block',
      padding: '4px 24px',
      position: 'relative',
      '--yt-live-chat-sponsor-color': '#0f9d58',
      '& #card': {
        alignItems: 'center',
        backgroundColor: 'var(--yt-live-chat-sponsor-color)',
        borderRadius: '4px',
        boxShadow: [
          '0 2px 2px 0 rgba(0, 0, 0, 0.14)',
          '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
          '0 3px 1px -2px rgba(0, 0, 0, 0.2)',
        ].join(', '),
        color: '#fff',
        display: 'flex',
        flexDirection: 'row',
        fontSize: '14px',
        padding: '8px 16px',
        position: 'relative',
        minHeight: '40px',
      },
      '& #author-photo': {
        alignSelf: 'flex-start',
        borderRadius: '50%',
        display: 'block',
        flex: 'none',
        marginRight: '16px',
        overflow: 'hidden',
      },
      '& #content': {
        flex: '1',
        flexBasis: '0.000000001px',
      },
      '& #author-name': {
        display: 'none',
      },
      '& #event-text': {
        color: 'rgba(255, 255, 255, 0.7)',
        fontWeight: '500',
      },
      '& #detail-text': {
        fontSize: '15px',
        wordBreak: 'break-word',
        wordWrap: 'break-word',
      },
    },
    'yt-live-chat-paid-message-renderer': {
      display: 'block',
      fontSize: '15px',
      padding: '4px 24px',
      position: 'relative',
    },
    'yt-live-chat-paid-message-renderer #card': {
      borderRadius: '4px',
      boxShadow: [
        '0 2px 2px 0 rgba(0, 0, 0, 0.14)',
        '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
        '0 3px 1px -2px rgba(0, 0, 0, 0.2)',
      ].join(', '),
      display: 'flex',
      flexDirection: 'column',
    },
    'yt-live-chat-paid-message-renderer #card yt-img-shadow': {
      borderRadius: '50%',
      display: 'block',
      flex: 'none',
      height: '40px',
      marginRight: '16px',
      overflow: 'hidden',
      width: '40px',
    },
    'yt-live-chat-paid-message-renderer #header': {
      alignItems: 'center',
      backgroundColor: 'var(--yt-live-chat-paid-message-header-background-color, #125aac)',
      borderTopLeftRadius: '4px',
      borderTopRightRadius: '4px',
      color: 'var(--yt-live-chat-paid-message-header-color, #fff)',
      display: 'flex',
      flexDirection: 'row',
      fontWeight: '500',
      minHeight: '20px',
      padding: '8px 16px',
      position: 'relative',
    },
    'yt-live-chat-paid-message-renderer[show-only-header] #header': {
      borderBottomLeftRadius: '4px',
      borderBottomRightRedius: '4px',
    },
    'yt-live-chat-paid-message-renderer #header-content': {
      alignItems: 'baseline',
      display: 'flex',
      flex: '1',
      flexBasis: '0.000000001px',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    'yt-live-chat-paid-message-renderer #header-content-primary-column': {
      display: 'flex',
      flex: '1',
      flexBasis: '0.000000001px',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    'yt-live-chat-paid-message-renderer #author-name': {
      color: 'var(--yt-live-chat-paid-message-author-name-color, rgba(255, 255, 255, 0.7))',
      fontSize: '14px',
    },
    'yt-live-chat-paid-message-renderer #timestamp': {
      color: 'var(--yt-live-chat-teriary-text-color, hsla(0, 0%, 6.7%, .4))',
      // display: 'var(--yt-live-chat-item-timestamp-display, inline)',
      display: 'none',
      fontSize: '11px',
      margin: 'var(--yt-live-chat-item-timestamp-margin, 0 8px 0 0)',
    },
    'yt-live-chat-paid-message-renderer #content': {
      backgroundColor: 'var(--yt-live-chat-paid-message-background-color, #1565c0)',
      borderBottomLeftRadius: '4px',
      borderBottomRightRadius: '4px',
      color: 'var(--yt-live-chat-paid-message-color, #fff)',
      padding: '8px 16px',
      wordBreak: 'break-word',
      wordWrap: 'break-word',
    },
    'yt-live-chat-paid-message-renderer[allow-animations] #header, yt-live-chat-paid-message-renderer[allow-animations] #content': {
      transitionDuration: '0.2s',
      transitionProperty: 'background-color',
    },
  },
});

export default connect()(withStyles(styles)(Preview));
