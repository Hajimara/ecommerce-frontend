import { User } from 'next-auth';

export interface IServerLayoutAdditionalProps {
  session?: User;
}
