import { Oval } from 'react-loader-spinner';

export const LoaderForPage = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        width: '150vh',
        zIndex: 5000,
        height: '100vh',
        overflow: 'hidden',
        display: 'grid',
        placeItems: 'center center',
      }}
    >
      <Oval
        visible={true}
        height="50"
        width="50"
        color="#fbd13e"
        secondaryColor="orange"
        wrapperStyle={{ width: 50, height: 50 }}
      />
    </div>
  );
};
