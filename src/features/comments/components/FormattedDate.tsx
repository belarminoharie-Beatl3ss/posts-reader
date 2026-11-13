type FormattedDateProps = {
  value?: string | null;
};

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: "medium",
  timeStyle: "short",
});

export default function FormattedDate({ value }: FormattedDateProps) {
  if (!value) return null;

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return null;

  return <time dateTime={date.toISOString()}>{dateFormatter.format(date)}</time>;
}
