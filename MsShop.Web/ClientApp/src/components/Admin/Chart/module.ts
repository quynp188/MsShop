export interface IDataChart {
  name: string;
  ActiveUser: number;
}
export interface IProps {
  title: string;
  data: IDataChart[];
  dataKey: string;
  grid: boolean;
}
