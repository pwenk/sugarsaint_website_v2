import type { Outcome } from './types'

export function getSubjectLine(outcome: Outcome): string {
  switch (outcome) {
    case 'green':
      return "Your SugarSaint Results: You're a Great Fit! ✅"
    case 'yellow':
      return 'Your SugarSaint Results: Proceed with Caution ⚠️'
    case 'red':
      return 'Your SugarSaint Results: Not a Match Right Now'
  }
}

export function getEmailTemplate(outcome: Outcome): string {
  const baseStyles = `
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: #2c2c2c;
  `

  const buttonStyle = (outcome: Outcome) => {
    const bgColor = outcome === 'green' ? '#d4af37' : outcome === 'yellow' ? '#FFB84D' : '#9a8f7f'
    return `
      display: inline-block;
      padding: 14px 28px;
      background-color: ${bgColor};
      color: #2c2c2c;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      margin: 20px 0;
    `
  }

  switch (outcome) {
    case 'green':
      return `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="${baseStyles} background-color: #fffbf5; padding: 40px 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; padding: 40px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <div style="width: 64px; height: 64px; background-color: #e8f5e9; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 32px;">
                ✅
              </div>
              <h1 style="color: #2c2c2c; font-size: 28px; margin: 0;">SugarSaint Was Designed For You</h1>
            </div>

            <p style="font-size: 16px; color: #4a4a4a; margin-bottom: 20px;">
              Based on your quiz answers, <strong>you're an ideal candidate</strong> for this metabolic approach, sugar.
            </p>

            <p style="font-size: 16px; color: #4a4a4a; margin-bottom: 20px;">
              Here's why you're a great fit:
            </p>

            <ul style="font-size: 15px; color: #4a4a4a; line-height: 1.8; margin-bottom: 30px;">
              <li>You're experiencing metabolic symptoms that this approach addresses</li>
              <li>You're willing to eliminate PUFAs – the foundational requirement</li>
              <li>You're open to body-signal-based experimentation</li>
              <li>You're ready to trust your body over external rules</li>
            </ul>

            <div style="text-align: center; margin: 40px 0;">
              <a href="https://sugarsaint.com/course" style="${buttonStyle('green')}">
                Enroll in SugarSaint Now ($297)
              </a>
            </div>

            <p style="font-size: 16px; color: #4a4a4a; margin-bottom: 20px;">
              <strong>What you'll get:</strong>
            </p>

            <ul style="font-size: 15px; color: #4a4a4a; line-height: 1.8; margin-bottom: 30px;">
              <li>12 modules teaching Ray Peat metabolic approach</li>
              <li>20+ experiments to find what works for YOUR body</li>
              <li>PUFA elimination protocol and safe food lists</li>
              <li>Body signal tracking tools</li>
              <li>Lifetime access</li>
            </ul>

            <div style="background-color: #fff4df; border-left: 4px solid #d4af37; padding: 20px; margin: 30px 0; border-radius: 8px;">
              <p style="margin: 0; font-size: 14px; color: #6a6258;">
                <strong>30-Day Money-Back Guarantee:</strong> If this doesn't work for you, we'll refund every penny. No questions asked.
              </p>
            </div>

            <div style="text-align: center; margin-top: 40px; padding-top: 30px; border-top: 1px solid #efe4cf;">
              <p style="font-size: 13px; color: #9a8f7f;">
                SugarSaint • Metabolic Health Course<br>
                <a href="mailto:hello@sugarsaint.com" style="color: #d4af37; text-decoration: none;">hello@sugarsaint.com</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `

    case 'yellow':
      return `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="${baseStyles} background-color: #fffbf5; padding: 40px 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; padding: 40px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <div style="width: 64px; height: 64px; background-color: #fff4df; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 32px;">
                ⚠️
              </div>
              <h1 style="color: #2c2c2c; font-size: 28px; margin: 0;">SugarSaint Could Work For You, But...</h1>
            </div>

            <p style="font-size: 16px; color: #4a4a4a; margin-bottom: 20px;">
              You're willing to do the work, but there are some considerations, honey.
            </p>

            <p style="font-size: 16px; color: #4a4a4a; margin-bottom: 20px;">
              Here's what we noticed:
            </p>

            <ul style="font-size: 15px; color: #4a4a4a; line-height: 1.8; margin-bottom: 30px;">
              <li>✅ You're willing to eliminate PUFAs (most important)</li>
              <li>⚠️ You don't have strong metabolic symptoms yet</li>
              <li>⚠️ OR you might be looking for more structure than this experiment-based approach provides</li>
            </ul>

            <div style="background-color: #fff4df; border-left: 4px solid #FFB84D; padding: 20px; margin: 30px 0; border-radius: 8px;">
              <p style="margin: 0; font-size: 14px; color: #6a6258;">
                <strong>Why This Matters:</strong> This course is designed for people with clear symptoms who are ready to experiment. You might get more value from free resources first, then come back when you're experiencing metabolic issues.
              </p>
            </div>

            <p style="font-size: 16px; color: #4a4a4a; margin-bottom: 20px;">
              <strong>Your options:</strong>
            </p>

            <ol style="font-size: 15px; color: #4a4a4a; line-height: 1.8; margin-bottom: 30px;">
              <li><strong>Explore free resources first:</strong> Read the blog, watch videos, join the newsletter</li>
              <li><strong>Still want to enroll?</strong> You're welcome to – just know the 30-day guarantee applies</li>
            </ol>

            <div style="text-align: center; margin: 40px 0;">
              <a href="https://sugarsaint.com/course" style="${buttonStyle('yellow')} border: 2px solid #FFB84D; background-color: transparent; color: #2c2c2c;">
                I Still Want to Enroll ($297)
              </a>
            </div>

            <div style="text-align: center; margin-top: 40px; padding-top: 30px; border-top: 1px solid #efe4cf;">
              <p style="font-size: 13px; color: #9a8f7f;">
                SugarSaint • Metabolic Health Course<br>
                <a href="mailto:hello@sugarsaint.com" style="color: #d4af37; text-decoration: none;">hello@sugarsaint.com</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `

    case 'red':
      return `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="${baseStyles} background-color: #fffbf5; padding: 40px 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; padding: 40px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <div style="width: 64px; height: 64px; background-color: #fee; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 32px;">
                ❌
              </div>
              <h1 style="color: #2c2c2c; font-size: 28px; margin: 0;">SugarSaint Isn't The Right Fit (And That's Okay)</h1>
            </div>

            <p style="font-size: 16px; color: #4a4a4a; margin-bottom: 20px;">
              We'd rather be honest than sell you something that won't work, sugar.
            </p>

            <p style="font-size: 16px; color: #4a4a4a; margin-bottom: 20px;">
              <strong>Based on your answers:</strong>
            </p>

            <p style="font-size: 15px; color: #4a4a4a; line-height: 1.8; margin-bottom: 30px;">
              You indicated you're not willing to eliminate PUFAs. This is the foundational requirement – without it, nothing else works. The entire course is built on PUFA elimination as non-negotiable.
            </p>

            <div style="background-color: #fff4df; border-left: 4px solid #c5524d; padding: 20px; margin: 30px 0; border-radius: 8px;">
              <p style="margin: 0; font-size: 14px; color: #6a6258;">
                <strong>Why Honesty Matters:</strong> We could take your $297, but that wouldn't help you. This approach requires PUFA elimination as the foundation. If you're not ready for that, this won't work.
              </p>
            </div>

            <p style="font-size: 16px; color: #4a4a4a; margin-bottom: 20px;">
              <strong>What if you change your mind?</strong>
            </p>

            <p style="font-size: 15px; color: #4a4a4a; line-height: 1.8; margin-bottom: 30px;">
              If you decide later you're ready to eliminate PUFAs, come back and retake the quiz. We'll be here, honey.
            </p>

            <div style="text-align: center; margin: 40px 0;">
              <a href="https://sugarsaint.com/quiz" style="${buttonStyle('red')} border: 2px solid #9a8f7f; background-color: transparent; color: #2c2c2c;">
                Retake the Quiz
              </a>
            </div>

            <p style="font-size: 16px; color: #4a4a4a; margin-bottom: 20px;">
              <strong>In the meantime, explore these free resources:</strong>
            </p>

            <ul style="font-size: 15px; color: #4a4a4a; line-height: 1.8; margin-bottom: 30px;">
              <li>Read the blog on metabolic health</li>
              <li>Watch educational videos on PUFAs</li>
              <li>Join the newsletter for weekly tips</li>
            </ul>

            <p style="font-size: 15px; color: #6a6258; text-align: center; margin-top: 40px;">
              <em>No hard feelings, sugar. We respect this isn't for everyone. If your current approach works, keep doing it.</em>
            </p>

            <div style="text-align: center; margin-top: 40px; padding-top: 30px; border-top: 1px solid #efe4cf;">
              <p style="font-size: 13px; color: #9a8f7f;">
                SugarSaint • Metabolic Health Course<br>
                <a href="mailto:hello@sugarsaint.com" style="color: #d4af37; text-decoration: none;">hello@sugarsaint.com</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `
  }
}
