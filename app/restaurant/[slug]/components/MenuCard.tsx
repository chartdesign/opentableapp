import { Item } from "@prisma/client";
import MenuList from "./MenuList";

export default function MenuCard({ menu }: { menu: Item[] }) {
  return (
    <main className="bg-white mt-5">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-4xl">Menu</h1>
        </div>

        {menu.length ? (
          <div className="flex flex-wrap justify-between">
            {menu.map((item) => (
              <MenuList key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap justify-between">
            <p>
              This restaurant does not have a menu yet. Please check back later.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
