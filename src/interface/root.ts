import { User } from 'next-auth';

export interface IServerLayoutAdditionalProps {
  session?: User;
}

export interface ISvgIconProps {
  width?: number;
  height?: number;
  color?: string;
}
