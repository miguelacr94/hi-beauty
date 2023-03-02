import Error from "../components/shared/Icons/Error";
import Wrapper from "../components/shared/Wrapper";
import MainLayout from "./MainLayout";

const ErrorLayout = ({
  error,
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
        <Error size="5rem" />
        <span className="text-lg font-semibold">{error}</span>
      </Wrapper>
    </MainLayout>
  );
};

export default ErrorLayout;
