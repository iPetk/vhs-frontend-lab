import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { VHS, vhsFormSchema, VhsFormType } from "../../types";

type Props = {
  onSubmit: any;
  values?: VHS;
};

export const VhsForm = ({ onSubmit, values }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VhsFormType>({
    resolver: zodResolver(vhsFormSchema),
    defaultValues: {
      title: values?.title || "",
      description: values?.description || "",
      genre: values?.genre || "",
      duration: values?.duration || 0,
      releasedAt: values?.releasedAt || 0,
      rentalPrice: values?.rentalPrice || 0,
      rentalDuration: values?.rentalDuration || 0,
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Title</p>
        <input {...register("title")} />
        {errors.title && <span>{errors.title.message}</span>}
        <p>Description</p>
        <input {...register("description")} />
        {errors.description && <span>{errors.description.message}</span>}
        <p>Genre</p>
        <input {...register("genre")} />
        {errors.genre && <span>{errors.genre.message}</span>}
        <p>Duration</p>
        <input
          type="number"
          {...register("duration", { valueAsNumber: true })}
        />
        {errors.duration && <span>{errors.duration.message}</span>}
        <p>Release year</p>
        <input
          type="number"
          {...register("releasedAt", { valueAsNumber: true })}
        />
        {errors.releasedAt && <span>{errors.releasedAt.message}</span>}
        <p>Rental price</p>
        <input
          type="number"
          {...register("rentalPrice", { valueAsNumber: true })}
        />
        {errors.rentalPrice && <span>{errors.rentalPrice.message}</span>}
        <p>Rental duration</p>
        <input
          type="number"
          {...register("rentalDuration", { valueAsNumber: true })}
        />
        {errors.rentalDuration && <span>{errors.rentalDuration.message}</span>}
        <p>Upload thumbnail</p>
        <input type="file" {...register("thumbnail")} />
        {errors.thumbnail && <span>{errors.thumbnail.message}</span>}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
