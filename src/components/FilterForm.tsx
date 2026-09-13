import type { Filters } from '../types'
import { AGE_GROUPS, COMMUNITIES, OCCASIONS, RELATIONS, VIBES } from '../data/options'

interface Props {
  filters: Filters
  onChange: (filters: Filters) => void
  onSubmit: () => void
}

function SelectField<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: T
  options: { value: T; label: string }[]
  onChange: (v: T) => void
}) {
  return (
    <label className="flex flex-col gap-1 text-sm font-medium text-rose-900">
      {label}
      <select
        className="rounded-lg border border-rose-200 bg-white px-3 py-2 text-rose-950 shadow-sm focus:border-rose-400 focus:outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  )
}

export function FilterForm({ filters, onChange, onSubmit }: Props) {
  return (
    <form
      className="grid grid-cols-1 gap-4 rounded-2xl bg-white/70 p-6 shadow-lg backdrop-blur sm:grid-cols-2 lg:grid-cols-3"
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit()
      }}
    >
      <SelectField
        label="Occasion"
        value={filters.occasion}
        options={OCCASIONS.map((o) => ({ value: o.value, label: `${o.emoji} ${o.label}` }))}
        onChange={(v) => onChange({ ...filters, occasion: v })}
      />
      <SelectField
        label="Community / Religion"
        value={filters.community}
        options={COMMUNITIES}
        onChange={(v) => onChange({ ...filters, community: v })}
      />
      <SelectField
        label="Vibe"
        value={filters.vibe}
        options={VIBES.map((v) => ({ value: v.value, label: v.label }))}
        onChange={(v) => onChange({ ...filters, vibe: v })}
      />
      <SelectField
        label="Age Group"
        value={filters.ageGroup}
        options={AGE_GROUPS}
        onChange={(v) => onChange({ ...filters, ageGroup: v })}
      />
      <SelectField
        label="Your Relation"
        value={filters.relation}
        options={RELATIONS}
        onChange={(v) => onChange({ ...filters, relation: v })}
      />
      <div className="flex items-end">
        <button
          type="submit"
          className="w-full rounded-lg bg-rose-600 px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-rose-700"
        >
          Find my outfits
        </button>
      </div>
    </form>
  )
}
