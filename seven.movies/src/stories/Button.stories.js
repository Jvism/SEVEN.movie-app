import React from 'react';

import Button from '../components/atoms/Button';

export default {
  title: 'Atoms/Button',
  component: Button,
}

export const Primary = () => <Button type="primary">Iniciar sesión</Button>
export const Secondary = () => <Button type="secondary">Registrarse</Button>
