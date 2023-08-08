export default function Description({description}: {description: string}) {
  return (
    <main>
      <div className="mt-4">
        <p className="text-lg font-light">{description}</p>
      </div>
    </main>
  );
}
