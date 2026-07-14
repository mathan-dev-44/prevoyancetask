import { memo } from "react";
import Button from "../common/Button";

const Pagination = ({ page, totalPages, onPrevious, onNext }) => {
  return (
    <div className="flex justify-end items-center gap-3 mt-6">
      <Button variant="secondary" disabled={page === 1} onClick={onPrevious}>
        Previous
      </Button>

      <span>
        Page {page} of {totalPages}
      </span>

      <Button
        variant="secondary"
        disabled={page === totalPages}
        onClick={onNext}
      >
        Next
      </Button>
    </div>
  );
};

export default memo(Pagination);
