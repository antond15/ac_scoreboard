import { writable } from 'svelte/store';
import type SheetConfig from '$types/config';

export default writable<SheetConfig>({
  title: {
    text: 'AC Scoreboard',
    logo: './logo.svg',
  },
  side: 'right',
  showOverlay: true,
  overlayBlur: 'sm',
  closeOnEscape: true,
  closeOnOutsideClick: true,
  uppercaseNames: false,
  compactRows: false,
  playerColumns: 1,
  groupColumns: 1,
});
