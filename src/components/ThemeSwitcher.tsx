import { useLayoutEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';
import classNames from 'classnames';
import { usePersistentContent } from '../hooks/usePersistentContent';
import { PersistentEnum } from '../core/enums/persistent.enum';

const THEME_LIGHT = 'saga-orange';
const THEME_DARK = 'arya-orange';

export const ThemeSwitcher = () => {
  const [theme, setTheme] = usePersistentContent(PersistentEnum.THEME, THEME_LIGHT);
  const [icon, setIcon] = useState(PrimeIcons.MOON);

  const switchTheme = async () => {
    await setTheme(theme === THEME_DARK ? THEME_LIGHT : THEME_DARK);
  };

  useLayoutEffect(() => {
    const cssLink = document.getElementById('app-theme');
    cssLink?.setAttribute('href', `themes/${theme}/theme.css`);
    setIcon(theme === THEME_LIGHT ? PrimeIcons.MOON : PrimeIcons.SUN);
  }, [theme]);

  return (
    <Button
      icon={icon}
      className={classNames('m-2 p-button-rounded', {
        'p-button-primary': theme === THEME_DARK,
        'p-button-secondary': theme === THEME_LIGHT,
      })}
      onClick={switchTheme}
      aria-label="Switch theme"
    />
  );
};
