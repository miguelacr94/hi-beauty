import Spinner from "../components/shared/Spinner";
import Wrapper from "../components/shared/Wrapper";
import MainLayout from "./MainLayout";

const LoadingLayout = ({
  message,
  withHeader = false,
  withFooter = false,
  fullScreen = false,
}) => {
  return (
    <MainLayout
      withHeader={withHeader}
      withFooter={withFooter}
      fullScreen={fullScreen}
    >
      <Wrapper className="flex-col items-center justify-center h-full py-20 space-y-5 text-center text-gray-600">
        <Spinner className="w-16 h-16 text-gray-200 fill-gray-600" />
        <span className="text-lg font-semibold">{message}</span>
      </Wrapper>
    </MainLayout>
  );
};

export default LoadingLayout;
