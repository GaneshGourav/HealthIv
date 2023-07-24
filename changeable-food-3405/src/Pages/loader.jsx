import { Skeleton, SkeletonCircle, SkeletonText, Box } from "@chakra-ui/react";

export const Loader = () => {
  return (
    <>
      <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="20" />
        <SkeletonText mt="10" noOfLines={10} spacing="4" skeletonHeight="10" />
      </Box>
    </>
  );
};
