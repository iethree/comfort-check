
const levels = [
  { id: 5, color: 'text-five', text: "No Problem, I'll talk about anything" },
  { id: 4, color: 'text-four', text: "I’ll talk about almost anything; a few things might be hard." },
  { id: 3, color: 'text-three', text: "I’ll talk about some things, but others will be hard to say." },
  { id: 2, color: 'text-two', text: "I’m not going to say much; I’ll let others bring up issues." },
  { id: 1, color: 'text-one', text: "I’m not going to talk at all, I don’t feel safe." },
];

export default function Legend() {
  return (
    <div id="legend" className="flex justify-center my-10">
      <div>
        {levels.map((l) => (
          <div key={l.id} className={`${l.color}`}>
            <strong className="mr-2 text-xl leading-tight">{l.id}</strong> {l.text}
          </div>
        ))}
      </div>
    </div>
  )
}
