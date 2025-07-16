
import { create } from 'zustand';

type Locale = 'ja' | 'en' | 'zh';
type MessageFile = 'common' |'Pg100' | 'Pg200' | 'Pg300' | 'Pg400' | 'Pg500' | 'Pg600'| 'Pg900';

type Messages = Record<MessageFile, Record<string, string>>;

interface LocaleState {
  locale: Locale;
  messages: Messages;
  setLocale: (newLocale: Locale) => Promise<void>;
}

export const useLocaleStore = create<LocaleState>((set) => ({
  locale: 'ja',
  messages: {
    common: {},
    Pg100: {},  
    Pg200: {},
    Pg300: {},
    Pg400: {},
    Pg500: {},
    Pg600: {},
    Pg900: {},

  },
  setLocale: async (newLocale) => {
    const loadedMessages: Messages = {
      common: {},
      Pg100: {},
      Pg200: {},
      Pg300: {},
      Pg400: {},
      Pg500: {},
      Pg600: {},
      Pg900: {},
    };

    const messageFiles: MessageFile[] = ['common', 'Pg100', 'Pg200', 'Pg300', 'Pg400', 'Pg500', 'Pg600', 'Pg900'];

    for (const file of messageFiles) {
      const mod = await import(`../../messages/${newLocale}/${file}.json`);
      loadedMessages[file] = mod.default as Record<string, string>;
    }

    set({ locale: newLocale, messages: loadedMessages });
  },
}));

export type { MessageFile };
