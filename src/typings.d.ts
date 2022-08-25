declare module '*.module.css';
declare module '*.module.scss';
declare module '*.png';
declare module '*.jpg';
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
  export default content;
}
