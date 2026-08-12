'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLocale, useTranslations } from 'next-intl'
import { leadSchema, type LeadFormData } from '@/lib/validations'
import { getLocalizedContent } from '@/config/localized-content'
import { track, readUtm } from '@/lib/analytics'
import { Icon } from '@/components/ui/Icon'

export function LeadForm({ source = 'contact' }: { source?: string }) {
  const t = useTranslations('contact.form')
  const { services, industries } = getLocalizedContent(useLocale())
  const budgets = [
    { value: 'under-5k', label: t('budgets.under5k') },
    { value: '5-15k', label: t('budgets.5to15k') },
    { value: '15-50k', label: t('budgets.15to50k') },
    { value: '50k-plus', label: t('budgets.over50k') },
    { value: 'not-sure', label: t('budgets.unsure') },
  ]
  const [done, setDone] = useState(false)
  const [serverError, setServerError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: { source },
  })

  async function onSubmit(values: LeadFormData) {
    setServerError(false)
    track('form_submit', { label: source })
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, source, utm: readUtm() }),
      })
      if (!res.ok) throw new Error('failed')
      track('form_success', { label: source })
      setDone(true)
    } catch {
      setServerError(true)
    }
  }

  if (done) {
    return (
      <div className="card" style={{ padding: 36, textAlign: 'center' }}>
        <div
          style={{
            width: 54,
            height: 54,
            borderRadius: '50%',
            background: 'var(--grad-soft)',
            border: '1px solid var(--bd2)',
            color: 'var(--cyan)',
            display: 'grid',
            placeItems: 'center',
            margin: '0 auto 18px',
          }}
        >
          <Icon name="check" size={26} />
        </div>
        <h3 style={{ fontSize: 22 }}>{t('success')}</h3>
      </div>
    )
  }

  return (
    <form className="card" style={{ padding: 'clamp(22px, 3vw, 32px)' }} onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Honeypot */}
      <div className="hp" aria-hidden>
        <label>
          Do not fill this
          <input type="text" tabIndex={-1} autoComplete="off" {...register('botcheck')} />
        </label>
      </div>

      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        <Field label={t('name')} error={errors.name?.message}>
          <input className={`field ${errors.name ? 'field-error' : ''}`} placeholder={t('namePlaceholder')} {...register('name')} />
        </Field>
        <Field label={t('company')} optional optionalLabel={t('optional')}>
          <input className="field" placeholder={t('companyPlaceholder')} {...register('company')} />
        </Field>
        <Field label={t('email')} error={errors.email?.message}>
          <input className={`field ${errors.email ? 'field-error' : ''}`} type="email" placeholder="you@company.com" {...register('email')} />
        </Field>
        <Field label={t('whatsapp')} optional optionalLabel={t('optional')}>
          <input className="field" placeholder="+971 …" {...register('whatsapp')} />
        </Field>
        <Field label={t('industry')} optional optionalLabel={t('optional')}>
          <select className="field" defaultValue="" {...register('industry')}>
            <option value="" disabled>
              {t('industryPlaceholder')}
            </option>
            {industries.map((i) => (
              <option key={i.key} value={i.title}>
                {i.title}
              </option>
            ))}
            <option value="Other">{t('other')}</option>
          </select>
        </Field>
        <Field label={t('service')} optional optionalLabel={t('optional')}>
          <select className="field" defaultValue="" {...register('service')}>
            <option value="" disabled>
              {t('servicePlaceholder')}
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </Field>
        <Field label={t('website')} optional optionalLabel={t('optional')}>
          <input className="field" placeholder="https://…" {...register('website')} />
        </Field>
        <Field label={t('budget')} optional optionalLabel={t('optional')}>
          <select className="field" defaultValue="" {...register('budget')}>
            <option value="" disabled>
              {t('budgetPlaceholder')}
            </option>
            {budgets.map((b) => (
              <option key={b.value} value={b.label}>
                {b.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div style={{ marginTop: 16 }}>
        <Field label={t('message')} error={errors.message?.message}>
          <textarea
            className={`field ${errors.message ? 'field-error' : ''}`}
            placeholder={t('messagePlaceholder')}
            {...register('message')}
          />
        </Field>
      </div>

      {serverError && <p className="error-text" style={{ marginTop: 14 }}>{t('error')}</p>}

      <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: 20 }} disabled={isSubmitting}>
        {isSubmitting ? t('sending') : t('submit')}
        {!isSubmitting && <Icon name="arrow-right" size={18} />}
      </button>
    </form>
  )
}

function Field({
  label,
  error,
  optional,
  optionalLabel,
  children,
}: {
  label: string
  error?: string
  optional?: boolean
  optionalLabel?: string
  children: React.ReactNode
}) {
  return (
    <label style={{ display: 'block' }}>
      <span style={{ display: 'flex', gap: 6, fontSize: 13.5, color: 'var(--wm)', marginBottom: 7 }}>
        {label}
        {optional && <span style={{ color: 'var(--wf)', fontSize: 12 }}>({optionalLabel})</span>}
      </span>
      {children}
      {error && <span className="error-text">{error}</span>}
    </label>
  )
}
