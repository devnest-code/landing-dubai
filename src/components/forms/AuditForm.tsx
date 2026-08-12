'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { auditSchema, type AuditFormData } from '@/lib/validations'
import { track, readUtm } from '@/lib/analytics'
import { Icon } from '@/components/ui/Icon'

export function AuditForm() {
  const t = useTranslations('audit')
  const [done, setDone] = useState(false)
  const [serverError, setServerError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuditFormData>({
    resolver: zodResolver(auditSchema),
    defaultValues: { source: 'website-audit' },
  })

  async function onSubmit(values: AuditFormData) {
    setServerError(false)
    track('audit_submit', {})
    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, utm: readUtm() }),
      })
      if (!res.ok) throw new Error('failed')
      track('form_success', { label: 'audit' })
      setDone(true)
    } catch {
      setServerError(true)
    }
  }

  if (done) {
    return (
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', color: 'var(--w)' }}>
        <span style={{ color: 'var(--cyan)', display: 'inline-flex' }}>
          <Icon name="check" size={22} />
        </span>
        <p style={{ fontSize: 16 }}>{t('success')}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="hp" aria-hidden>
        <label>
          Do not fill this
          <input type="text" tabIndex={-1} autoComplete="off" {...register('botcheck')} />
        </label>
      </div>

      <div style={{ display: 'grid', gap: 12 }}>
        <div>
          <input className={`field ${errors.website ? 'field-error' : ''}`} placeholder={t('website')} {...register('website')} />
          {errors.website && <span className="error-text">{errors.website.message}</span>}
        </div>
        <div style={{ display: 'grid', gap: 12, gridTemplateColumns: '1fr 1fr' }}>
          <div>
            <input className={`field ${errors.name ? 'field-error' : ''}`} placeholder={t('name')} {...register('name')} />
            {errors.name && <span className="error-text">{errors.name.message}</span>}
          </div>
          <input className="field" placeholder={t('company')} {...register('company')} />
        </div>
        <div style={{ display: 'grid', gap: 12, gridTemplateColumns: '1fr 1fr' }}>
          <div>
            <input className={`field ${errors.email ? 'field-error' : ''}`} type="email" placeholder={t('email')} {...register('email')} />
            {errors.email && <span className="error-text">{errors.email.message}</span>}
          </div>
          <input className="field" placeholder={t('whatsapp')} {...register('whatsapp')} />
        </div>
      </div>

      {serverError && <p className="error-text" style={{ marginTop: 12 }}>Something went wrong. Please try again.</p>}

      <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: 16 }} disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : t('submit')}
        {!isSubmitting && <Icon name="arrow-right" size={18} />}
      </button>
    </form>
  )
}
